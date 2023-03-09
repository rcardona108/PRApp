import {Store} from '../../redux/Store'
import { StyleSheet,TextInput,View } from "react-native";
import SetRepCount from '../../redux/Actions/SetRepCount';
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import SetExerciseName from '../../redux/Actions/SetExerciseName';

const RepsWeightTextInput = () => {
    const [repVal,setRepVal] = useState();
   const state = useSelector((state) = state.reducer.reps);
    const dispatch = useDispatch();
    const dispatchAndLog = (payload) => {
        console.log('dispatching...')
        dispatch(SetRepCount(payload));
        console.log(state)
    }
    useEffect(() => {
         setRepVal(state)
         console.log(state)
      },[state])
    return(
        <View
            style = {styles.background}
        >
            <TextInput
                style = {styles.repInput}
                keyboardType='number-pad'
                placeholder='reps'
                placeholderTextColor = 'white'
                textAlign='center'
                onChangeText={numReps => dispatchAndLog(numReps)}
                defaultValue={repVal}
            >
            </TextInput>
            <TextInput
                style = {styles.weightInput}
                keyboardType='number-pad'
                placeholder='weight'
                placeholderTextColor = 'white'
                textAlign='center'
                onChangeText={''}
                defaultValue={''}
            >
            </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    background:{
        backgroundColor: '#9B9A9A',
        width: 290,
        borderRadius:20,
        marginHorizontal:50,
        height:150,
        justifyContent:'center',
        marginTop:20,
        flexDirection: 'row'
    },
    repInput:{
        width:145,
        fontSize:35,
        borderColor:'black',
        borderRightWidth:5,
    },
    weightInput:{
        fontSize:35,
        borderColor:'black',
        borderLeftWidth:5,
        width:145,
    }
})
export default RepsWeightTextInput;