import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import AppNavigator from './src/navigation/AppNavigator';
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";


import { theme } from "./src/theme";
const App = () => {
  
  return (
    <>
    <ThemeProvider theme={theme}>
    <RestaurantsContextProvider>
     <AppNavigator />
     </RestaurantsContextProvider>
     </ThemeProvider>
    
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
