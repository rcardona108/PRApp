import { useContext, useEffect,useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { setDoc,doc, addDoc, collection } from "firebase/firestore";
<<<<<<< Updated upstream:Components/PRForm/SubmitPr.js
import {todayDate} from '../../appFunctions/getCurrentDate'
import db from "../../firebase/firestore";
import SendPr from "../../appFunctions/SendPr";
import { PrContext } from "../../appFunctions/PrContext";
=======
import {todayDate} from '../appFunctions/getCurrentDate'
import db from "../firebase/firestore";
import {AuthContext} from '../navigation/AuthProvider'
>>>>>>> Stashed changes:Components/SubmitPr.js

const SubmitPr = () => {
  const value = useContext(PrContext);
  const [Reps,SetReps] = useState('');
  const [Exercise,SetExercise] = useState('Select a Exercise');
  const [Weight, SetWeight] = useState('');
  const [email,setEmail] = useState('not working');
  const auth = useContext(AuthContext)
  useEffect(()=>{
    SetReps(value.reps);
    SetExercise(value.exercise);
    SetWeight(value.weight);
    setEmail(auth.user)
  },[value.reps,value.exercise,value.weight,auth.user]);
  
  return(
    <TouchableOpacity
      onPress={async () => {
        try {
          await setDoc(doc(db,'UsersData','user email'),{
            Exercise:{Exercise},
            Reps:{Reps},
            Weight:{Weight},
          });
        }catch(e){
          console.log(e)
        }
      }}
    >
      <View style = {styles.submitButton}>
          <Text style = {styles.textStyle}>Submit</Text>
      </View>
    </TouchableOpacity>
  )
};
styles = StyleSheet.create({
    submitButton:{
        width:209,
        height:100,
        backgroundColor:'#9B9A9A',
        borderRadius:80,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50

    },
    textStyle:{
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    }
})
export default SubmitPr;