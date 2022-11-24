import { useContext,useEffect } from "react"
import { StyleSheet, Text, TouchableOpacity,View,Button, Alert } from "react-native"
import { PrContext } from "../appFunctions/PrContext"
import { useNavigation } from "@react-navigation/native"

const ExerciseListComponent = ({exerciseName}) => {
    const value = useContext(PrContext);
    const navigation = useNavigation()
    useEffect(() => {console.log(value.exercise)},[value.exercise]);

    return(
        
    <View>
    
        <TouchableOpacity
            onPress={()=>{value.setExercise(exerciseName);navigation.goBack()}}
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
    fontSize:'56',
    },
    
})
export default ExerciseListComponent;
