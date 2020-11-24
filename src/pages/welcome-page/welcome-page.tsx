import * as React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ROUTE } from '../../components/shared/constant/CRoute';
import { styles } from './style'

import { useNavigation } from '@react-navigation/native';


/*
Functionnal component
export default function WelcomePage() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Accueil</Text>
            <TouchableOpacity activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(ROUTE.WELCOME_TAB.PROFIL)}>
                <Text>Profil</Text>
            </TouchableOpacity >
        </View>
    );
}
*/

// Class component
export default class WelcomePage extends React.Component {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Accueil</Text>
                <TouchableOpacity activeOpacity={0.7}
                    style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate(ROUTE.WELCOME_TAB.PROFIL)}>
                    <Text>Profil</Text>
                </TouchableOpacity >
            </View>
        );
    }
}