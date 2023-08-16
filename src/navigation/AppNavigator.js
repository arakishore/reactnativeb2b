import { View, Text } from 'react-native';
import React from 'react';
import { StatusBar } from 'react-native'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from '../core/theme'
import Splash from '../screens/Splash';
import Dashboard from './Dashboard';
import SearchScreen from '../screens/SearchScreen';
import { LoginScreen, RegisterScreen, ResetPasswordScreen } from '../screens/login';
import { Products } from '../screens/Products';
 

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Provider theme={theme}>
            <StatusBar />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="RegisterScreen"
                        component={RegisterScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ResetPasswordScreen"
                        component={ResetPasswordScreen}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="Dashboard"
                        component={Dashboard}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SearchScreen"
                        component={SearchScreen}
                        options={{ headerShown: true }}
                    />
                     {/* <Stack.Screen
                        name="Products"
                        component={Products}
                        options={{ headerShown: true }}
                    /> */}

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default AppNavigator;