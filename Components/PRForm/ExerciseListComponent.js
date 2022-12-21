import { useCallback, useContext,useEffect } from "react"
import { StyleSheet, Text, TouchableOpacity,View,Button, Alert } from "react-native"
import { PrContext } from "../../appFunctions/PrContext"
import { useNavigation,useFocusEffect } from "@react-navigation/native"

const ExerciseListComponent = ({exerciseName}) => {
    const value = useContext(PrContext);
    const navigation = useNavigation()
    
    return(
        
    <View>
    
        <TouchableOpacity
            
            onPress={()=>{{value.setExercise(exerciseName)}}}
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
