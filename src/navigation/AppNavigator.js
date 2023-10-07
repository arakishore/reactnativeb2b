import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from '../core/theme'
import Splash from '../screens/Splash';
import Dashboard from './Dashboard';
import SearchScreen from '../screens/SearchScreen';
import { LoginScreen, RegisterScreen, ResetPasswordScreen, OtpVerificationScreen } from '../screens/login';
//import { Products } from '../screens/Products';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesAndProductsExtra } from '../store/redux/slices/categorySlice';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Category from '../screens/Category';
import Products from '../screens/Products';
 

const Drawer = createDrawerNavigator();


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
 

    return (
        <PaperProvider theme={theme}>
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
                        name="OtpVerificationScreen"
                        component={OtpVerificationScreen}
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
                        name="Category"
                        component={Category}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Products"
                        component={Products}
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
        </PaperProvider>
    );
};

export default AppNavigator;