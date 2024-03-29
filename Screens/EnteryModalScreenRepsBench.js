import { SafeAreaView } from "react-navigation";
import SubmitPrModal from "../Components/SubmitPrModal";
import {TouchableOpacity, View, StyleSheet,TextInput} from 'react-native';
import React,{useState} from 'react';
import { setDoc, doc } from "firebase/firestore"; 
import db from '../firebase/firestore';
import getCurrentDate from "../appFunctions/getCurrentDate";

const SendRepPr = async ({exercise,value}) => {
    const todayDate = getCurrentDate();
    try{
    await setDoc(doc(db,exercise,{todayDate}),{
        Rep:{value},
        },{merge:true});
  }catch(error){
    console.log(error)
  }
};

const EnteryModalScreenRepsBench = ({navigation}) => {
    const [numReps,setNumReps] = useState();
    let todayDate = getCurrentDate();
    
    return(
        <SafeAreaView style={{backgroundColor:'#141212',height:'100%'}}>
        <View style={styles.inputStyle}>
                <TextInput
                    style = {styles.inputStyle}
                    keyboardType='number-pad'
                    placeholder='reps'
                    placeholderTextColor = 'white'
                    textAlign='center'
                    onChangeText={numReps => setNumReps(numReps)}
                    defaultValue={numReps}
                >
                </TextInput>
        </View>
            <TouchableOpacity
            onPress={ () => {
                SendRepPr('Bench',{numReps});
                navigation.navigate('PrEntery')
        }}      
            >
                <SubmitPrModal />
            </TouchableOpacity>
        </SafeAreaView>
    );  
};

const styles = StyleSheet.create({
    
    inputStyle:{
        justifyContent:'center',
        width: 292,
        height: 123,
        backgroundColor:'#9B9A9A',
        alignItems: 'center',
        borderRadius: 40,
        marginHorizontal: 50,
        marginVertical: 200,
        fontSize:50
    },
});
export default EnteryModalScreenRepsBench;