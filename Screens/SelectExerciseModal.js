import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { PrProvider } from "../appFunctions/PrContext";
import ExerciseListComponent from "../Components/PRForm/ExerciseListComponent";
export const EXERCISE_DATA = [
    'Bench',
    'Squat',
    'Deadlift'
]

const SelectExerciseModal = () => ( 
    <View style={{ backgroundColor: '#9B9A9A', height: '100%', width: '100%' }}>
        <SafeAreaView>
            <View style={{
                alignItems: 'center'

            }}>
            <PrProvider>
                <FlatList
                    style={{
                        marginTop: 30,

                    }}
                    data={EXERCISE_DATA}
                    keyExtractor={item => item}
                   renderItem={({ item }) => <ExerciseListComponent exerciseName={item} />} />
            </PrProvider>
            </View>
        </SafeAreaView>
    </View>
)
export default SelectExerciseModal;