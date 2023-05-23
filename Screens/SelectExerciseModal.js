import { useEffect,useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { PrProvider } from "../appFunctions/PrContext";
import ExerciseListComponent from "../Components/PRForm/ExerciseListComponent";
export const EXERCISE_DATA = [
    'Bench',
    'Squat',
    'Deadlift',
    'Shoulder Press',
    'Barbell Row'
]

const SelectExerciseModal = ({listHeight,style}) =>{
    

    
    return(
    <View style = {[style,listHeight]}>
            <View style={{
                alignItems: 'center',
                justifyContent:'center'
            }}>
            <PrProvider>
                <FlatList
                   
                    data={EXERCISE_DATA}
                    keyExtractor={item => item}
                   renderItem={({ item }) => <ExerciseListComponent exerciseName={item} />} />
            </PrProvider>
            </View>
    </View>
    
    )
    }
export default SelectExerciseModal;