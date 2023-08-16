import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import AppNavigator from './src/navigation/AppNavigator';
 

import { theme } from "./src/theme";
const App = () => {
  
  return (
    <>
    <ThemeProvider theme={theme}>
     
     <AppNavigator />
    
     </ThemeProvider>
    
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
