import { ActivityIndicator, View, Text,StyleSheet, Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import * as Font from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
const Splash = ({ navigation }) => {

    const [fontLoaded, setFontLoaded] = useState(false);

    // Load the custom font using Font.loadAsync
    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                
                'Poppins-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
                'Poppins-Italic': require('../../assets/fonts/Poppins/Poppins-Italic.ttf'),
                'Roboto-Regular': require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
                'Roboto-Italic': require('../../assets/fonts/Roboto/Roboto-Italic.ttf'),
                // Add more custom fonts here if needed
            });
            setFontLoaded(true);
            // setTimeout(() => {
            //   navigation.navigate("LoginScreen");
            // },4000);

             navigation.navigate("LoginScreen");
        }
        loadFont();

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            
            <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <ActivityIndicator size="large" color="red" />
        <Text>Loading...</Text>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff', // Set the background color of the screen
    },
    logo: {
      width: 200, // Set the width of the logo image
      height: 200, // Set the height of the logo image
    },
  });

export default Splash