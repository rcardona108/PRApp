import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
/**
 * creates a button for navigating off of home screen
 */
const HomeButton = props => {
    const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={()=>{
            navigation.navigate(props.nav)
        }}>
        <View style={styles.button}>
            <Text style={styles.textStyle}>
                {props.text}
            </Text>
        </View>
        </TouchableOpacity>
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