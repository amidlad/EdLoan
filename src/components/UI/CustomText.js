import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../utility/Colors';
import Dimens from '../../utility/Dimens';

const CustomText = (props) => {
    return (
        <Text
            allowFontScaling={false}
            {...props}
            style={{ ...styles.text, ...props.style }}
        >
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: Dimens.textSize12,
        color: Colors.WHITE,
        alignItems: "center"
    }
})

export default CustomText;