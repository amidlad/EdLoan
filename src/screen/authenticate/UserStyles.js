import { StyleSheet } from 'react-native';
import Colors from '../../utility/Colors';

const UserStyles = StyleSheet.create({

    container: {
        flex: 1
    },
    inputViewContainer: {
        height: 50,
        marginHorizontal: 20,
        marginVertical: 10,
        color: Colors.BLACK,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: Colors.black
    },
    dateViewContainer: {
        height: 50,
        color: Colors.BLACK,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: Colors.black
    },
    ageViewContainer: {
        marginHorizontal: 20,
        alignItems: 'center',
        marginVertical: 10,
        color: Colors.BLACK,
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        borderColor: Colors.black
    },

    buttonViewContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.WHITE,
    },

    inputType: {
        width: '100%',
        paddingStart: 10,
        paddingEnd: 10,
        alignItems: 'center',
        color: Colors.BLACK,
        fontSize: 15
    }

});

export default UserStyles;


