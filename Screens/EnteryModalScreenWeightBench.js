import { SafeAreaView } from "react-navigation";
import SubmitPrModal from "../Components/SubmitPrModal";
import {TouchableOpacity, View, StyleSheet,TextInput} from 'react-native';
import React,{useState} from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import db from '../firebase/firestore';
import getCurrentDate from "../appFunctions/getCurrentDate";
const EnteryModalScreenWeightBench = ({navigation}) => {
    const [numWeight,setNumWeight] = useState();
    let todayDate = getCurrentDate()
    return(
        <SafeAreaView style={{backgroundColor:'#141212',height:'100%'}}>
        <View style={styles.inputStyle}>
                <TextInput
                    style = {styles.inputStyle}
                    keyboardType='number-pad'
                    placeholder='Weight'
                    placeholderTextColor = 'white'
                    textAlign='center'
                    onChangeText={numWeight => setNumWeight(numWeight)}
                    defaultValue={numWeight}
                >
                </TextInput>
        </View>
            <TouchableOpacity
            onPress={async () => {
                try{
                    await setDoc(doc(db,'Bench',todayDate),{
                        Weight:{numWeight}
                    },{merge:true});
                }catch(error){
                    console.log(error)
                }
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
export default EnteryModalScreenWeightBench;