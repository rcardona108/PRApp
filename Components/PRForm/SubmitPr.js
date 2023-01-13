import { useCallback, useContext, useEffect,useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import getCurrentDate from "../../appFunctions/getCurrentDate";
import { setDoc,doc, addDoc, collection } from "firebase/firestore";
import db from "../../firebase/firestore";
import SendPr from "../../appFunctions/SendPr";
import { PrContext } from "../../appFunctions/PrContext";
import { AuthContext } from "../../navigation/AuthProvider";

const SubmitPr = () => {
  const value = useContext(PrContext);
  const [Reps,SetReps] = useState('');
  const [Exercise,SetExercise] = useState('Select a Exercise');
  const [Weight, SetWeight] = useState('');
  const [email,setEmail] = useState('not working');
  const auth = useContext(AuthContext)
  useEffect(()=>{
    SetExercise(value.exercise);
    console.log(Exercise);
  },[value.exercise])
  const getInfo = useCallback(()=>{
  SetReps(value.reps);
  SetWeight(value.weight);
  },[]);
  const date = getCurrentDate();
  
  return(
    <TouchableOpacity
      onPress={async () => {
    //   getInfo();
    //   try {
    //     await setDoc(doc(db,'UsersData',date),{
    //       Exercise:{Exercise},
    //       Reps:{Reps},
    //       Weight:{Weight},
    //     });
    //   }catch(e){
    //     console.log(e)
    //   }
    // }}
    console.log(Exercise)
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