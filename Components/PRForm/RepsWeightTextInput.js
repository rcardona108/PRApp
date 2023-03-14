import {Store} from '../../redux/Store'
import { StyleSheet,TextInput,View } from "react-native";
import SetRepCount from '../../redux/Actions/SetRepCount';
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import SetWeightForm from '../../redux/Actions/SetWeightForm';

const RepsWeightTextInput = () => {4
    const [repVal,setRepVal] = useState();
    const [weightVal,setWeightVal] = useState();

    const stateRep = useSelector(state => state.Reps).RepCount;
    const stateWeight = useSelector(state => state.WeightForm).weight;

    const dispatch = useDispatch();
    const dispatchAndLog = (action) => {
        console.log('dispatching...');
        dispatch(action);
    }
     useEffect(() => {
        setRepVal(stateRep)
        setWeightVal(stateWeight)
        console.log(repVal,stateWeight)
       },[stateRep,stateWeight])
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
                onChangeText={numReps => dispatchAndLog(SetRepCount(numReps))}
                defaultValue={repVal}
            >
            </TextInput>
            <TextInput
                style = {styles.weightInput}
                keyboardType='number-pad'
                placeholder='weight'
                placeholderTextColor = 'white'
                textAlign='center'
                onChangeText={weight => dispatchAndLog(SetWeightForm(weight))}
                defaultValue={weightVal}
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