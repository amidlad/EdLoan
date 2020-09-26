import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AcctNavigator } from './Navigator';

const AppContainer = () => {

    return (
        <NavigationContainer>
            <AcctNavigator />
        </NavigationContainer>
    )

}

export default AppContainer;