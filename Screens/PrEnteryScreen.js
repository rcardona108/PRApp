import React, { useContext, useEffect } from 'react';
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
import SelectExerciseModal from './SelectExerciseModal';
import PopDown from '../Components/popDown';
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
                <PopDown />
                <RepsWeightTextInput/>            
                <NotesInput/>
                <SubmitPr/>
            </PrProvider>

        </SafeAreaView>
        </View>
    );
    };

export default PrEnteryScreen;