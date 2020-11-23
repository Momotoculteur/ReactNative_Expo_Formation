import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform, Switch, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


import { ROUTE } from '../components/shared/constant/CRoute'
import TodoPage from '../pages/todo-page/todo-page'
import StackNavigatorProfil from './stackNavigatorProfil'

const Tab = createBottomTabNavigator()



export default function MainTabNavigator() {
    return (
        
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={
                    {
                        activeTintColor: '#e50d54',
                        inactiveTintColor: 'gray',
                        labelPosition: 'below-icon',
                        showLabel: true
                    }
                }
                
                initialRouteName={ROUTE.WELCOME_TAB.MAIN}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: string = "";
                        // Definit le type d icones selon la platforme
                        if (Platform.OS === "android") {
                            iconName += "md-";
                        } else if (Platform.OS === "ios") {
                            iconName += "ios-";
                        }

                        if (focused) {
                            size = size + 4;

                        }

                        // assigne l icone
                        switch (route.name) {
                            case ROUTE.WELCOME_TAB.MAIN: {
                                iconName += "person";
                                break;
                            }
                            case ROUTE.TODO_TAB.MAIN: {
                                iconName += "create";
                                break;
                            }

                            default: {
                                break;
                            }
                        }

                        return (<Ionicons name={iconName} size={size} color={color} />)
                    }
                })
                }

            >
                <Tab.Screen
                    name={ROUTE.WELCOME_TAB.MAIN}
                    component={StackNavigatorProfil}

                />

                <Tab.Screen
                    name={ROUTE.TODO_TAB.MAIN}
                    component={TodoPage}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}