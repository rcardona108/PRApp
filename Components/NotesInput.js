import { useContext, useEffect } from "react";
import { StyleSheet, TextInput,View } from "react-native"
import { PrProvider } from "../appFunctions/PrContext";

const NotesInput = () => {
    const value = useContext(PrProvider);
    
  return(
    <View 
    style = {styles.background}
    >
        <TextInput
            style={styles.noteInput}
            placeholder={'Notes:'}
            placeholderTextColor="white"
            onSubmitEditing={writtenNote => {value.setNotes(writtenNote)} }
        >

        </TextInput>
    </View>
  )
};
const styles = StyleSheet.create({
    background:{
        width:286,
        height:150,
        backgroundColor: '#9B9A9A',
        marginTop:20,
        marginHorizontal:53,
        borderRadius:10
    },
    noteInput:{
        fontSize:15,
        marginLeft:5
    }
});
export default NotesInput;
