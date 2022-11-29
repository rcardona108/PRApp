import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { PrContext } from "../appFunctions/PrContext";

const SubmitPr = () => {
  const value = useContext(PrContext);
  return(
    <TouchableOpacity
      onPress={() => value.sendPrData()}
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