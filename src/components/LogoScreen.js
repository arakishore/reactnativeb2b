import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LogoScreen = () => {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
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

  export default LogoScreen;
