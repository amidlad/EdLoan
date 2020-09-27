import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../utility/Colors';

const Card = (props) => {
    return (<View style={{ ...styles.card, ...props.style }}>
        {props.children}
    </View>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'rgba(0,0,0,0.06)',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        borderRadius:30,
        elevation: 5,
        margin:10,
        backgroundColor: 'grey'
    }
});

export default Card;