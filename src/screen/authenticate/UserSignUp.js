import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, Text, KeyboardAvoidingView, ScrollView, Platform, ActivityIndicator, Alert, Keyboard } from 'react-native';
import Topbar from '../../components/Topbar';
import RoundButton from '../../components/UI/RoundButton';
import User from '../../model/User';
import Colors from '../../utility/Colors';
import UserStyles from './UserStyles';
import * as userAction from '../../store/action/userreg';
import NavConstants from '../../navigation/NavConstants';

const UserSignUp = (props) => {

    const [userName, setUserName] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState(0);
    const [type, setType] = useState(0);
    const [locality, setLocality] = useState('');
    const [guest, setGuestCount] = useState(0);
    const [address, setAddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isStudentSelected, setIsStudentSelected] = useState(false);
    const [isEmployeeSelected, setIsEmployeeSelected] = useState(false);

    const textChangeHandler = (text) => {
        setUserName(text);
    }

    const textDOBChangeHandler = (text) => {
        setDob(text);
    }

    const texAgeChangeHandler = (text) => {
        setAge(text);
    }

    const textLocalityChangeHandler = (text) => {
        setLocality(text);
    }

    const textGuestChangeHandler = (text) => {
        setGuest(text);
    }

    const textAddressChangeHandler = (text) => {
        setAddress(text);
    }

    const toggleUserType = (type) => {
        if (type === 1) {
            setIsEmployeeSelected(false);
            setIsStudentSelected(true);
        } else {
            setIsEmployeeSelected(true);
            setIsStudentSelected(false);
        }
    }

    const submitUserData = async () => {
        try {
            Keyboard.dismiss();
            setIsLoading(true);
            var user = new User(new Date().getTime(), userName, dob, age, type, locality, guest, address);
            console.log("user === ", user)
            let userAct = await userAction.userRegistration(user);
            if (true) {
                //   alert('Thank you for a registration.')
                props.navigation.navigate(NavConstants.HOME)
            } else {
                alert('Something went wrong try again!')
            }
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            alert('Something went wrong try again!')
            console.log(err)
        }

    }

    const body = () => {
        return (
            <KeyboardAvoidingView
                keyboardShouldPersistTaps='handled'
                enabled
                style={{ flex: 1 }}
                behavior={Platform.OS == "ios" ? "padding" : "null"}>
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={{ height: '100%' }}>
                    <View>
                        <View style={UserStyles.inputViewContainer}>
                            <TextInput style={UserStyles.inputType}
                                selectionColor={Colors.BLACK}
                                id="inputNameId"
                                label="inputName"
                                placeholder="Enter your name"
                                editable
                                autoCapitalize={true}
                                keyboardType="default"
                                autoCorrect={false}
                                maxLength={100}
                                numberOfLines={1}
                                onChangeText={textChangeHandler}
                                value={userName}
                            />
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginHorizontal: 20,
                            marginVertical: 10,
                        }}>
                            <View style={[UserStyles.dateViewContainer, { flex: 6, marginEnd: 20 }]}>
                                <TextInput style={UserStyles.inputType}
                                    id="inputDOBId"
                                    label="inputDOB"
                                    placeholder="DOB, ex: DD/MM/YYYY"
                                    editable
                                    autoCapitalize={true}
                                    keyboardType="numbers-and-punctuation"
                                    autoCorrect={false}
                                    maxLength={10}
                                    numberOfLines={1}
                                    keyboardType="numbers-and-punctuation"
                                    onChangeText={textDOBChangeHandler}
                                    value={dob}
                                />
                            </View>
                            <View style={[UserStyles.dateViewContainer, { flex: 2 }]}>
                                <TextInput style={UserStyles.inputType}
                                    id="inputAgeId"
                                    label="inputAge"
                                    placeholder="Age"
                                    numberOfLines={1}
                                    keyboardType="number-pad"
                                    editable
                                    autoCapitalize={true}
                                    autoCorrect={false}
                                    maxLength={3}
                                    onChangeText={texAgeChangeHandler}
                                    value={age}
                                />
                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginHorizontal: 20,
                            marginVertical: 10,
                            justifyContent: 'space-evenly'
                        }}>
                            <RoundButton buttonText={'STUDENT'}
                                isSelected={isStudentSelected}
                                onPress={() => {
                                    toggleUserType(1);
                                    setType(1);
                                }}></RoundButton>
                            <RoundButton buttonText={'EMPLOYIED'}
                                isSelected={isEmployeeSelected}
                                onPress={() => {
                                    toggleUserType(2);
                                    setType(2);
                                }}></RoundButton>
                        </View>
                        <View style={UserStyles.inputViewContainer}>
                            <TextInput style={UserStyles.inputType}

                                id="inputLocalityId"
                                label="inputLocality"
                                placeholder="Locality"
                                editable
                                keyboardType="default"
                                autoCapitalize={true}
                                autoCorrect={false}
                                maxLength={100}
                                numberOfLines={1}
                                keyboardType="number-pad"
                                onChangeText={textLocalityChangeHandler}
                                value={locality}
                            />
                        </View>
                        <View style={UserStyles.inputViewContainer}>
                            <TextInput style={UserStyles.inputType}

                                id="inputGuestId"
                                label="inputGuest"
                                placeholder="Guest"
                                editable
                                autoCapitalize={true}
                                numberOfLines={1}
                                keyboardType="number-pad"
                                autoCorrect={false}
                                maxLength={1}
                                onChangeText={textGuestChangeHandler}
                                value={guest}
                            />
                        </View>
                        <View style={UserStyles.inputViewContainer}>
                            <TextInput style={UserStyles.inputType}
                                numberOfLines={1}
                                id="inputAddressId"
                                label="inputAddress"
                                placeholder="Enter your address"
                                editable
                                autoCapitalize={true}
                                autoCorrect={false}
                                maxLength={300}
                                keyboardType="default"
                                onChangeText={textAddressChangeHandler}
                                value={address} />
                        </View>

                        <View style={{ height: 70, marginHorizontal: 50 }}>
                            {isLoading
                                ?
                                <ActivityIndicator size={"large"} style={{ flex: 1, }} />
                                :
                                <RoundButton buttonText={'SUBMIT'}
                                    onPress={() => {
                                       // submitUserData();
                                        props.navigation.navigate(NavConstants.HOME)
                                    }}
                                ></RoundButton>
                            }

                        </View>

                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        )
    }

    const head = () => {
        return (
            <Topbar
                title="Registration"
                showBack={false} />
        );
    }

    return (
        <SafeAreaView style={UserStyles.container}
            forceInset={{ bottom: 'never' }}
        >
            <View style={{ height: '100%', backgroundColor: Colors.WHITE }}>
                {head()}
                {body()}
            </View>
        </SafeAreaView>
    );

}

export default UserSignUp;