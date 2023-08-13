import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Entypo,
    Ionicons
} from "@expo/vector-icons";

const HeaderRightButton = ({ onPress }) => {
    const navigation = useNavigation();
    const handleCartPress = () => {
        navigation.navigate('SearchScreen'); // Navigate to the "Cart" screen
      };
    
    return (
        <Ionicons name="search"  onPress={handleCartPress}
        size={24}
        color='grey'
        style={{ marginRight: 20 }} />
        

    );
};

const HeaderLeftButton = ({ onPress }) => {
    const navigation = useNavigation();
    const leftHandleCartPress = () => {
        navigation.openDrawer(); // Navigate to the "Cart" screen
      };
    return (
        <Ionicons name="ios-menu"  onPress={leftHandleCartPress}
        size={24}
        color='grey'
        style={{ paddingLeft:5 , marginLeft: 10 }} />
        

    );
};

export { HeaderRightButton, HeaderLeftButton };
