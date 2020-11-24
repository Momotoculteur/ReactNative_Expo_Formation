import { Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react'
import { getProfileName } from '../../../service/profilAsyncStorage';
import { styles } from './style';


interface iState {
    connectedUser: string
}
interface IProps {
}
export default class ProfilPage extends React.Component<IProps, iState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            connectedUser: 'Invité',
        }
    }


    loadProfil() {
        getProfileName()
            .then((newName: string) => {
                this.setState({ connectedUser: newName })
            })
    }


    render() {
        return (
            <View>
                <Text>Bonjour, {this.state.connectedUser}</Text>
                <TouchableOpacity activeOpacity={0.7}
                    style={styles.buttonStyle}
                    onPress={() => this.loadProfil()}>
                    <Text>Charger profil</Text>
                </TouchableOpacity >
            </View>

        );
    }

}