import { useCallback, useContext, useEffect,useState } from "react";
import {  StyleSheet, Text, TouchableOpacity, View } from "react-native"
import getCurrentDate from "../../appFunctions/getCurrentDate";
import { setDoc,doc, addDoc, collection } from "firebase/firestore";
import db from "../../firebase/firestore";
import {useSelector} from 'react-redux'

const SubmitPr = () => {
  const stateName = useSelector(state => state.ExName).name;
  const stateReps = useSelector(state => state.Reps).RepCount;
  const stateWeight = useSelector(state => state.WeightForm).weight;
  const stateNote = useSelector(state => state.NoteForm).note;
  
  const [Reps,SetReps] = useState();
  const [Exercise,SetExercise] = useState();
  const [Weight, SetWeight] = useState();
  const [note, setNote] = useState('');

  useEffect(()=>{
    SetReps(Number.parseInt(stateReps));
    SetWeight(Number.parseInt(stateWeight));
    SetExercise(stateName);
    setNote(stateNote);
  },[stateName,stateReps,stateWeight,stateNote]);
  const date = getCurrentDate();
  let forMonth = new Date();
  let month = forMonth.getMonth();
  
  
  return(
    <TouchableOpacity
      onPress={async () => {
      if(Reps != null && Exercise != null && Weight != null && note != null ){
       try {
         await setDoc(doc(db,'UsersData',getCurrentDate()),{
           Month:{month},
           Exercise:{Exercise},
           Reps:{Reps},
           Weight:{Weight},
           Note: {note}
         });
       }catch(e){
         console.log(e)
       };
        console.log(Exercise);
        console.log(Reps);
      }else{
        alert('fillout all fields')
    }
  }
}
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