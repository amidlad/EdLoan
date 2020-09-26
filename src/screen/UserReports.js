import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import Topbar from '../components/Topbar';
import * as userAction from '../store/action/userlist';
import Colors from '../utility/Colors';
import UserStyles from './authenticate/UserStyles';

const UserReports = (props) => {

    const userList = useSelector(state => state.userListReducer.userList);

    useEffect(() => {
        userAction.fetchUserListing();
    }, [])

    const head = () => {
        return (
            <Topbar showBack={true}
            title="Reports"
            onBackPress={() => {
                props.navigation.goBack();
            }} />
        );
    }

   

    return (
        <SafeAreaView style={UserStyles.container}
            forceInset={{ bottom: 'never', top: 'never' }}
        >
            <View style={{ height: '100%', backgroundColor: Colors.WHITE }}>
                {head()}

            </View>
        </SafeAreaView>
    );

}

export default UserReports;