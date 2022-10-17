import React from 'react';
import { render } from 'react-dom';
import {View,ScrollView} from 'react-native';
import { SafeAreaView, FlatList, } from 'react-navigation';
import EnterPr from '../Components/EnterPr';

const LIFTS = [
    'Bench',
    'Incline Bench',
    'Shoulder Press',
    'Dead Lift',
    'Squat',
    'Barebell Row'
]
const PrEntery = () => {
    
    return(
        <View style = {{height:'100%',width:'100%',backgroundColor:'#141212'}}>

        <SafeAreaView>
        <ScrollView>
            {/**
             The text prop displays the text on component
             
             the screenRep prop
             */}
            <EnterPr text = "Bench" screenRep = "EnteryModalScreenRepsBench" screenWeight = "EnteryModalScreenWeightBench"/>
            <EnterPr text = "Incline Bench" screenRep = "EnteryModalScreenRepsInclineBench" screenWeight = "EnteryModalScreenWeightInclineBench"/>
            <EnterPr text = "Shoulder Press" screenRep = "EnteryModalScreenRepsShoulderPress" screenWeight = "EnteryModalScreenWeightShoulderPress"/>
            <EnterPr text = "DeadLift" screenRep = "EnteryModalScreenRepsDeadLift" screenWeight = "EnteryModalScreenWeightDeadLift"/>
            <EnterPr text = "Squat" screenRep = "EnteryModalScreenRepsSquat" screenWeight = "EnteryModalScreenWeightSquat"/>
            <EnterPr text = "Barbell Row" screenRep = "EnteryModalScreenRepsBarbellRow" screenWeight = "EnteryModalScreenWeightBarbellRow"/>
        </ScrollView>
        

        </SafeAreaView>
        </View>
    );
    };

export default PrEntery;