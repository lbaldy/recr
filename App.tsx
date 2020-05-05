/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Details from "./src/screens/Details";
import Store from './src/redux/Store';
import {Provider} from 'react-redux';

declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator();

function App() {
    return (

        <NavigationContainer>
            <Provider store={Store}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Details" component={Details}/>
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>

    );
}

export default App;
