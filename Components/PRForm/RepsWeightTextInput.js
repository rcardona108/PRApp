import { useContext } from "react";
import { StyleSheet,TextInput,View } from "react-native";
import { PrContext } from "../../appFunctions/PrContext";
import ChangeReps from "../../redux/Actions/ChangeRepsAction";
import Store from "../../redux/Store";
import {useSelector} from 'react-redux';

const RepsWeightTextInput = () => {
    const myState = useSelector((store)=>store.ChangeRepCount)

    function dispatchAndLog(action) {
        console.log('dispatching')
        Store.dispatch(action)
        console.log('next state', myState)
    }
    
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
                onChangeText={numReps => dispatchAndLog(ChangeReps(numReps))}
                defaultValue={null}
            >
            </TextInput>
            <TextInput
                style = {styles.weightInput}
                keyboardType='number-pad'
                placeholder='weight'
                placeholderTextColor = 'white'
                textAlign='center'
                onChangeText={null}
                defaultValue={null}
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