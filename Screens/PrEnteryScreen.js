import React, { useEffect } from 'react';
import { render } from 'react-dom';
import {View,ScrollView} from 'react-native';
import { SafeAreaView, FlatList, } from 'react-navigation';
import SelectExerciseButton from '../Components/SelectExerciseButton'
import { PrProvider } from '../appFunctions/PrContext';
import { Button } from 'react-native-web';
import { useFocusEffect } from '@react-navigation/native';
import RepsWeightTextInput from '../Components/RepsWeightTextInput';
import NotesInput from '../Components/NotesInput';
import SubmitPr from '../Components/SubmitPr';

const LIFTS = [
    'Bench',
    'Incline Bench',
    'Shoulder Press',
    'Dead Lift',
    'Squat',
    'Barebell Row'
]
const PrEnteryScreen = ({navigation}) => {
    
    
    return(
        <View style = {{height:'100%',width:'100%',backgroundColor:'#141212'}}>

        <SafeAreaView style = {{alignItems:'center'}}>
             {/**
              * use context for pr information
              */}
            <PrProvider>
                <SelectExerciseButton />
                <RepsWeightTextInput/>
            </PrProvider>
            <PrProvider>
                <NotesInput/>
                <SubmitPr/>
            </PrProvider>

        </SafeAreaView>
        </View>
    );
    };

export default PrEnteryScreen;