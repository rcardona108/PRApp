import { useContext, useEffect } from "react";
import { StyleSheet, TextInput,View } from "react-native"
import {useDispatch,useSelector} from 'react-redux'
import SetNoteForm from "../../redux/Actions/SetNoteForm";
const NotesInput = () => {
    const dispatch = useDispatch()    
    const state = useSelector(state => state.NoteForm).note;
    useEffect(()=>{
        console.log(state);
    },[state])
  return(
    <View 
    style = {styles.background}
    >
        <TextInput
            style={styles.noteInput}
            placeholder={'Notes:'}
            placeholderTextColor="white"
            onChangeText={note => dispatch(SetNoteForm(note))}
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
        marginLeft:5,
        color:'white'
    }
});
export default NotesInput;
