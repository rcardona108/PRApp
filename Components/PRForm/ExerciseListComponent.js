import { useCallback, useContext,useEffect } from "react"
import { StyleSheet, Text, TouchableOpacity,View,Button, Alert } from "react-native"
import { PrContext } from "../../appFunctions/PrContext"
import { useNavigation,useFocusEffect } from "@react-navigation/native"
import { useDispatch,useSelector } from "react-redux"
import SetExerciseName from "../../redux/Actions/SetExerciseName"
import SetExerciseNameReducer from "../../redux/Reducers/SetExerciseNameReducer"
const ExerciseListComponent = ({exerciseName}) => {
    // const dispatch = useDispatch()
    const state = useSelector(state => state.ExName).name
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(state)
    },[state])
    return(
        
    <View>
    
        <TouchableOpacity
            
            onPress={()=>{{dispatch(SetExerciseName(exerciseName))}}}>
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
