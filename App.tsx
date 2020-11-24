import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DatabaseManager from './src/database/DatabaseManager';
import MainTabNavigator from './src/navigation/tabNavigator';
import { initProfileName } from './src/service/profilAsyncStorage';


let customFonts = {
    'Arial': require('./src/assets/fonts/arial.ttf'),
}
interface iState {
    fontsLoaded: boolean;
}
interface IProps {
}
export default class App extends React.Component<IProps, iState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            fontsLoaded: false
        }
    }

    async loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this.loadFontsAsync();
        initProfileName();
        DatabaseManager.initializeDatabase();
    }

    render() {
        if (!this.state.fontsLoaded) {
            return <AppLoading />;
        } else {
            return (
                <SafeAreaView style={styles.container}>
                    <MainTabNavigator />
                </SafeAreaView>
            );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
