import React from 'react';
import { render } from 'react-dom';
import {View,ScrollView} from 'react-native';
import { SafeAreaView, FlatList, } from 'react-navigation';
import SelectExerciseButton from '../Components/SelectExerciseButton'
import { PrProvider } from '../appFunctions/PrContext';
const LIFTS = [
    'Bench',
    'Incline Bench',
    'Shoulder Press',
    'Dead Lift',
    'Squat',
    'Barebell Row'
]
const PrEnteryScreen = () => {
    
    return(
        <View style = {{height:'100%',width:'100%',backgroundColor:'#141212'}}>

        <SafeAreaView>
             {/**
              * use context for pr information
              */}
            <PrProvider>
                <SelectExerciseButton />
            </PrProvider>
        

        </SafeAreaView>
        </View>
    );
    };

export default PrEnteryScreen;