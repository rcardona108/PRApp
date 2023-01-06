import react, { useEffect,useContext,useState } from 'react';
import {View,ScrollView} from 'react-native';
import { SafeAreaView,  } from 'react-navigation';
import { PrProvider } from '../appFunctions/PrContext';
import PopDown from '../Components/PRForm/popDown';
import RepsWeightTextInput from '../Components/PRForm/RepsWeightTextInput';
import NotesInput from '../Components/PRForm/NotesInput';
import SubmitPr from '../Components/PRForm/SubmitPr';
import SelectExerciseButton from '../Components/PRForm/SelectExerciseButton';


const PrEnteryScreen = ({}) => {
    
    return(
        <View style = {{height:'100%',width:'100%',backgroundColor:'#141212'}}>

        <SafeAreaView style = {{alignItems:'center'}}>
             {/**
              * use context for pr information
              */}
                <PrProvider>
                <PopDown/>
                    
                <RepsWeightTextInput/>            
                <NotesInput/>
                <SubmitPr />
                </PrProvider>

        </SafeAreaView>
        </View>
        
    );
    };

export default PrEnteryScreen;