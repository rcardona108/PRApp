import { useContext } from "react"
import { StyleSheet, Text, TouchableOpacity,View } from "react-native"
import { PrContext } from "../appFunctions/PrContext"
import { useNavigation } from "@react-navigation/native"

const ExerciseListComponent = ({exerciseName}) => {
    const value = useContext(PrContext);
    const navigation = useNavigation()
    return(
    <View>
        <TouchableOpacity
            onPress={()=>{value.setExercise(exerciseName);console.log(value.exercise)}}
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
