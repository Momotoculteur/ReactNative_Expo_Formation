import { ROUTE } from "../components/shared/constant/CRoute";
import ProfilPage from "../pages/welcome-page/profil-page/profil-page";
import WelcomePage from "../pages/welcome-page/welcome-page";
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react'

const Stack = createStackNavigator();

export default function StackNavigatorProfil() {
    return (
        <Stack.Navigator initialRouteName={ROUTE.WELCOME_TAB.MAIN}>
            <Stack.Screen name={ROUTE.WELCOME_TAB.MAIN} component={WelcomePage} />
            <Stack.Screen name={ROUTE.WELCOME_TAB.PROFIL} component={ProfilPage} />

        </Stack.Navigator>
    )
}