import AsyncStorage from "@react-native-async-storage/async-storage"

export async function initProfileName() {
    try {
        const jsonValue = await AsyncStorage.getItem('@profile')
        if(jsonValue == null) {
            await AsyncStorage.setItem('@profile', JSON.stringify('Bastien MAURICE'))
        }
      } catch(e) {
            console.log('ERREUR : ' + e);
      }
}

export async function getProfileName() {
    try {
        const value = await AsyncStorage.getItem('@profile')
        if(value !== null) {
          return JSON.parse(value);
        } else {
            return 'Invité';
        }
      } catch(e) {
      }
}