import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { INote } from '../../components/shared/interface/INote';
import DatabaseManager from '../../database/DatabaseManager';
import { styles } from './style'
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

interface IProps {
}
interface iState {
    myNoteList: INote[];
    note: string;
}
export default class TodoPage extends React.Component<IProps, iState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            myNoteList: [],
            note: ''
        }
    }

    componentDidMount(): void {
        this.updateListNote();
    }

    updateListNote(): void {
        DatabaseManager.getAllNote()
            .then((result: INote[]) => {
                this.setState({
                    myNoteList: result
                })
            });
    }

    addNote(): void {
        DatabaseManager.createNote(this.state.note)
            .then(() => {
                this.updateListNote();
                this.setState({ note: '' })
            });
    }

    deleteNote(id: number): void {
        DatabaseManager.deleteNoteWithId(id)
            .then(() => {
                this.updateListNote();
            });
    }


    render() {
        return (
            <View style={{ paddingTop: Constants.statusBarHeight, flex: 1, flexDirection: 'column' }}>

                <Text style={{ flex: 1, fontSize: 30, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center' }}>A faire</Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <TextInput
                        placeholder="Ajouter note"
                        value={this.state.note}
                        onChangeText={text => this.setState({ note: text })}
                    />
                    <TouchableOpacity
                        style={{...styles.buttonStyle}}
                        onPress={() => this.addNote()}>
                        <Ionicons name={Platform.OS === 'ios' ? "ios-add" : 'md-add'} size={30} color='gray' />
                    </TouchableOpacity >
                </View>

                <View style={{ flex: 5, flexDirection: 'column' }}>
                    <ScrollView >
                        {
                            this.state.myNoteList.map((item: INote, index) => {
                                return (
                                    <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                                        <Text style={{textAlignVertical: 'center', flex: 1}}>{item.text}</Text>
                                        <TouchableOpacity
                                            style={styles.buttonDelete}
                                            onPress={() => this.deleteNote(item.id)}>
                                                <Ionicons name={Platform.OS === 'ios' ? "ios-trash" : 'md-trash'} size={30} color='red' />
                                        </TouchableOpacity >
                                    </View>
                                );
                            })
                        }
                    </ScrollView>
                </View>


            </View>
        );
    }


}


