import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../utility/Colors';
import CustomText from './UI/CustomText';

const Topbar = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: Colors.BLACK,
            justifyContent: 'space-between',
        }}>
            {props.showBack ?
                <TouchableOpacity
                    style={{ height: 50, justifyContent: 'center', }}
                    onPress={props.onBackPress}>

                    <CustomText style={{ marginHorizontal: 5, fontSize: 14, fontWeight: 'bold', color: Colors.WHITE }}>
                        {'Back'}</CustomText>
                </TouchableOpacity>
                : <View />}

            <View style={{ height: 50, justifyContent: 'center', }} >
                <CustomText style={{ marginHorizontal: 5, fontSize: 22, fontWeight: 'bold', color: Colors.WHITE }}>
                    {props.title}
                </CustomText>
            </View>
            <View style={{ width: 50, height: 50, }} />
        </View>

    );
}

export default Topbar;