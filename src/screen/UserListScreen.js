import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import Topbar from '../components/Topbar';
import CustomText from '../components/UI/CustomText';
import NavConstants from '../navigation/NavConstants';
import * as userListAction from '../store/action/userlist';
import Colors from '../utility/Colors';
import UserStyles from './authenticate/UserStyles';

const UserListScreen = (props) => {

    const userList = useSelector(state => state.userListReducer.userList);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        dispatch(userListAction.fetchUserListing());
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

    const searchFilter = (text) => {
        console.log('searchFilter text == ', text);
        if (text != null && text.length > 0) {
            setSearchValue(text);

            const searchData = userList.filter(item => {
                const userData = `${item.userName.toUpperCase()} ${item.locality.toUpperCase()}`;
                const textValue = text.toUpperCase();
                console.log('userData == ', userData);
                return userData.indexOf(textValue) > -1;
            })

            dispatch(userListAction.searchedUserListing(searchData));
        } else {
            setSearchValue('');
            dispatch(userListAction.fetchUserListing());
        }


    }

    const body = () => {
        return (
            <View style={{ flex: 1 }}>
                <View style={UserStyles.inputViewContainer}>
                    <TextInput style={UserStyles.inputType}
                        selectionColor={Colors.BLACK}
                        id="inputSearch"
                        label="inputSearch"
                        placeholder="Name or Locality"
                        editable
                        autoCapitalize={true}
                        keyboardType="default"
                        autoCorrect={false}
                        maxLength={100}
                        numberOfLines={1}
                        onChangeText={text => searchFilter(text)}
                        value={searchValue}
                    />
                </View>
                <FlatList
                    data={userList}
                    renderItem={({ item }) => {
                        return (
                            <Card>
                                <TouchableOpacity style={{ height: 50, justifyContent: 'center', }}
                                    onPress={() => {
                                        props.navigation.navigate(NavConstants.USER_DETAILS,
                                            { userData: item });
                                    }}
                                >
                                    <CustomText style={{
                                        marginHorizontal: 20, fontSize: 16
                                        , fontWeight: 'bold', color: Colors.WHITE
                                    }}>
                                        {item.userName} {", "} {item.locality}
                                    </CustomText>
                                </TouchableOpacity>
                            </Card>
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