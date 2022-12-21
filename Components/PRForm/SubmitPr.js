import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { setDoc,doc, addDoc, collection } from "firebase/firestore";
import {todayDate} from '../../appFunctions/getCurrentDate'
import db from "../../firebase/firestore";
import SendPr from "../../appFunctions/SendPr";
import { PrContext } from "../../appFunctions/PrContext";

const SubmitPr = () => {
  const value = useContext(PrContext);

  return(
    <TouchableOpacity
      onPress={() => SendPr()}
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