import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View, } from "react-native";
import ExerciseInformationScreen from "../../Screens/ExerciseInformation";


const ExerciseInfoButton = (exercise) => {
    const Navigation = useNavigation();
    return(
        
        <View style = {styles.container}>
        <TouchableOpacity
        
        
        onPress = {
            () => {Navigation.navigate('ExerciseInformationScreen');}
            
            }
        >
            
        <View style = {styles.InfoButton}>  
        <Text style = {styles.textStyle}>
            i
        </Text>
        </View> 
         
        
        </TouchableOpacity>
        </View>
        



    )
}

const styles = StyleSheet.create({
    InfoButton:{
        borderRadius:100,
        borderColor:'#141212',
        borderWidth:2,
        height: 40,
        width:40,
        alignItems:'center',
        marginLeft: 245,
        marginTop: 15,
        marginBottom:-40,
        backgroundColor: '#9B9A9A',
    },
    textStyle:{
        marginTop:2,
        color:'white',
        fontSize: 25,


    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
      },
});

export default ExerciseInfoButton;