import { useCallback, useContext,useEffect } from "react"
import { StyleSheet, Text, TouchableOpacity,View,Button, Alert } from "react-native"
import { PrContext } from "../../appFunctions/PrContext"
import { useNavigation,useFocusEffect } from "@react-navigation/native"
import {  useDispatch } from 'react-redux';
import Store from "../../redux/Store";
import PrFormActions from "../../redux/Actions/PrFormActions"

const ExerciseListComponent = ({exerciseName}) => {
    const navigation = useNavigation();
    //const dispatch = useDispatch();
    function dispatchAndLog(action) {
        console.log('dispatching', exerciseName)
        Store.dispatch(action)
        console.log('next state', Store.getState())
    }
    
    return(  
    <View>
    
        <TouchableOpacity
            
            onPress={()=>{{dispatchAndLog(PrFormActions(exerciseName))}}}
       >
            <Text style = {styles.text}>
                {exerciseName}
            </Text>
        </TouchableOpacity>
        
    </View>
    )
}
const styles = StyleSheet.create({
    text:{
    fontSize:56,
    color:'white'
    },
    
})
export default ExerciseListComponent;
