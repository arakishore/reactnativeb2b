import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "react-native";
import { Provider } from 'react-redux'; // Import Provider

import AppNavigator from './src/navigation/AppNavigator';
 
import  store  from "./src/store/redux/store";
import { theme } from "./src/theme";

//let isInitial = true;
const App = () => {
    
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="#000"
            translucent={true}
          />
          <AppNavigator />

        </ThemeProvider>

        <ExpoStatusBar style="auto" />
      </Provider>
    </>
  );
};

export default App;
