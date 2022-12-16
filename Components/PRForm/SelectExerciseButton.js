import { useNavigation,useFocusEffect } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext, useState,useEffect } from "react";
import { PrContext } from "../../appFunctions/PrContext";
/**
 * 
 * @returns button that navigates to the a modal to select an exercise
 */
const SelectExerciseButton = () => {
    const navigation = useNavigation();
    const [TextName,SetTextName] = useState("Select a Exercise");//eventually want to change text based on exercise state
    return(
        <SafeAreaView style = {{alignContent:'center'}}>
        <TouchableOpacity
            onPress={()=>navigation.navigate('SelectExerciseModal')}
        >
            <View style = {styles.background}>
                <Text style = {styles.Text}> {TextName} </Text>
            </View>
        </TouchableOpacity>
        
        </SafeAreaView>
    );
};

styles = StyleSheet.create({
    background:{
        backgroundColor: '#9B9A9A',
        width: 335,
        borderRadius:41,
        alignItems:'center',
        marginHorizontal:25,
        height:200,
        justifyContent:'center'
    },
    Text:{
        fontWeight:'bold',
        fontSize:40,
        color:'white',
        alignItems:'center'

    }
})
export default SelectExerciseButton;