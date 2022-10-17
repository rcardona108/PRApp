import React,{useState} from 'react';
import { View, StyleSheet,TextInput } from 'react-native';
const EnteryModal = props => {
    const [numReps,setNumReps] = useState();

    
    return(
        <View style={styles.inputStyle}>
                <TextInput
                    style = {styles.inputStyle}
                    keyboardType='number-pad'
                    placeholder={props.RepsOrWeight}
                    placeholderTextColor = 'white'
                    textAlign='center'
                    onChangeText={newNum => setNumReps(newNum)}
                    defaultValue={numReps}
                    onEndEditing={console.log('working')}
>
                </TextInput>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    
    inputStyle:{
        justifyContent:'center',
        width: 292,
        height: 123,
        backgroundColor:'#9B9A9A',
        alignItems: 'center',
        borderRadius: 40,
        marginHorizontal: 50,
        marginVertical: 200,
        fontSize:50
    },
});
export default EnteryModal;