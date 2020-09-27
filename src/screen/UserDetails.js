import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, Text, KeyboardAvoidingView, ScrollView, Platform, ActivityIndicator, Alert, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../components/Card';
import Topbar from '../components/Topbar';
import CustomText from '../components/UI/CustomText';
import Colors from '../utility/Colors';
import UserStyles from './authenticate/UserStyles';

const UserDetails = (props) => {

    const userData = props.route.params.userData;

    const head = () => {
        return (
            <Topbar showBack={true}
                title={userData.userName}
                onBackPress={() => {
                    props.navigation.goBack();
                }} />
        );
    }

    const body = () => {
        return (
            <Card>
                <View style={{ justifyContent: 'center', }}

                >
                    <CustomText style={{
                        margin: 20,
                        fontSize: 16
                        , fontWeight: 'bold', color: Colors.WHITE
                    }}>
                        {'Name : ' + userData.userName}
                    </CustomText>

                    <CustomText style={{
                        margin: 20,
                        marginHorizontal: 20, fontSize: 16
                        , fontWeight: 'bold', color: Colors.WHITE
                    }}>
                        {'Locality : ' + userData.locality}
                    </CustomText>

                    <CustomText style={{
                        margin: 20,
                        marginHorizontal: 20, fontSize: 16
                        , fontWeight: 'bold', color: Colors.WHITE
                    }}>
                        {'DOB : ' + userData.dob}
                    </CustomText>

                    <CustomText style={{
                        margin: 20,
                        marginHorizontal: 20, fontSize: 16
                        , fontWeight: 'bold', color: Colors.WHITE
                    }}>
                        {'Address : ' + userData.address}
                    </CustomText>
                </View>
            </Card>
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

export default UserDetails;