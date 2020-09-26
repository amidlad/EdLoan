import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import Topbar from '../components/Topbar';
import CustomText from '../components/UI/CustomText';
import * as userAction from '../store/action/userlist';
import Colors from '../utility/Colors';
import UserStyles from './authenticate/UserStyles';

const UserListScreen = (props) => {

    const userList = useSelector(state => state.userListReducer.userList);

    useEffect(() => {
        userAction.fetchUserListing();
    }, [])

    const head = () => {
        return (
            <Topbar showBack={true}
                title="Participants"
                onBackPress={() => {
                    props.navigation.goBack();
                }} />
        );
    }

    const body = () => {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={userList}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ height: 50, justifyContent: 'center', }} >
                                <CustomText style={{ marginHorizontal: 5, fontSize: 22, fontWeight: 'bold', color: Colors.BLACK }}>
                                    {item.userName}
                                </CustomText>
                            </View>
                        );
                    }}
                />
            </View>
        );
    }

    return (
        <SafeAreaView style={UserStyles.container}
            forceInset={{ bottom: 'never', top: 'never' }}
        >
            <View style={{ height: '100%', backgroundColor: Colors.WHITE }}>
                {head()}
                {body()}

            </View>
        </SafeAreaView>
    );

}

export default UserListScreen;