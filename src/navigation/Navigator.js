import React from 'react';
import { Text } from 'react-native';
import UserSignUp from '../screen/authenticate/UserSignUp';
import UserListing from '../screen/UserListScreen';
import UserDetails from '../screen/UserDetails';
import ReportScreen from '../screen/UserReports';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import Colors from '../utility/Colors';
import NavConstants from './NavConstants';

const defaultOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.WHITE : Colors.BLACK
    }
}

const Tab = createBottomTabNavigator();
export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabel: ({ focused, color }) => {
                    let name;
                    if (route.name === NavConstants.HOME) {
                        name = NavConstants.HOME;
                    } else if (route.name === NavConstants.REPORT) {
                        name = NavConstants.REPORT;
                    }

                    let text = <Text allowFontScaling={false} style={{
                        color: !focused ? Colors.BLACK : 'grey',
                        fontWeight: 'bold',
                    }}>
                        {name}
                    </Text>

                    return text;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'red',
            }}
        >
            <Tab.Screen name={NavConstants.HOME} component={HomeNavigator} />
            <Tab.Screen name={NavConstants.REPORT} component={ReportNavigator} />
        </Tab.Navigator>
    );
}

const HomeStackNavigator = createStackNavigator();
export const HomeNavigator = () => {
    return <HomeStackNavigator.Navigator screenOptions={[defaultOptions]}
        headerMode="null">

        <HomeStackNavigator.Screen name={NavConstants.HOME}
            component={UserListing} options={defaultOptions} />
        <HomeStackNavigator.Screen name={NavConstants.USER_DETAILS}
            component={UserDetails} options={defaultOptions} />

    </HomeStackNavigator.Navigator>
}


const ReportStackNavigator = createStackNavigator();
export const ReportNavigator = () => {
    return <ReportStackNavigator.Navigator screenOptions={[defaultOptions]}
        headerMode="null">

        <ReportStackNavigator.Screen name={NavConstants.REPORT}
            component={ReportScreen} options={defaultOptions} />

    </ReportStackNavigator.Navigator>
}

const AcctStackNavigator = createStackNavigator();
export const AcctNavigator = () => {
    return <AcctStackNavigator.Navigator screenOptions={[defaultOptions]}
        headerMode="null">

        <AcctStackNavigator.Screen name={NavConstants.USER_SIGNUP}
            component={UserSignUp} options={defaultOptions} />

        <AcctStackNavigator.Screen name={NavConstants.HOME}
            component={BottomTabNavigator} options={defaultOptions} />

    </AcctStackNavigator.Navigator>
}  
