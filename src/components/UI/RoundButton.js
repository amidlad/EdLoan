import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../utility/Colors';
import CustomText from './CustomText';

const RoundButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}
            style={props.isSelected ? styles.selectedContainer : styles.container}
        >
            {/* <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[Colors.WHITE, Colors.WHITE]}
                style={styles.gradient}> */}
            <CustomText style={styles.text}>
                {props.buttonText}
            </CustomText>
            {/* </LinearGradient> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BLACK,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        margin: 10,
        flex: 1,
        height: 50,

    },

    selectedContainer: {
        backgroundColor: Colors.BLACK,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        margin: 10,
        flex: 1,
        height: 50,
        borderWidth: 2,
        borderColor: 'red'
    },
    submitContainer: {
        backgroundColor: Colors.WHITE,
        borderWidth: 2,
        borderColor: Colors.BLACK,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        margin: 10,
        flex: 1,
        height: 50,

    },
    gradient: {
        width: "40%",
        justifyContent: 'center',
        height: 50,
        borderRadius: 10
    },
    text: {
        color: Colors.WHITE,
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: "bold"
    }

})

export default RoundButton;