import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
/**
 * creates a button for navigating off of home screen
 */
const HomeButton = props => {

    return(
        <View style={styles.button}>
            <Text style={styles.textStyle}>
                {props.text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        width: 330,
        height: 159,
        backgroundColor:'#9B9A9A',
        alignItems: 'center',
        borderRadius: 40,
        marginHorizontal: 30,
    },
    textStyle:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 48,
    }
});
export default HomeButton;