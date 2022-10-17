import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const EnterPr = (props) => {
    const navigation = useNavigation();
    return(
        <View style={styles.button}>
            <Text style={styles.textStyle}>
                {props.text}
            </Text>
            <View style = {styles.inputSec}>

                <TouchableOpacity style={styles.RepsBox}
                    onPress={()=>navigation.navigate(props.screenRep)}
                >
                    <Text style = {styles.RepsWeightText}>Reps</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.WeightBox}
                    onPress={()=>navigation.navigate(props.screenWeight)}                
                >
                    <Text style = {styles.RepsWeightText}>Weight</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    RepsBox:{
        width:'50%',
        height:'100%',
        borderRightColor:'black',
        borderRightWidth: 2.5,
        alignItems: 'center',
        
    },
    RepsWeightText: {
        fontSize:40,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 5,
    },
    WeightText:{

    },
    WeightBox:{
        width:'50%',
        height:'100%',
        borderLeftColor:'black',
        borderLeftWidth: 2.5,
        alignItems: 'center',
    },
    inputSec:{
        width:280,
        borderRadius:10,
        height:80,
        borderTopColor: 'black',
        borderTopWidth:5,
        marginTop:8,
        flexDirection: 'row',
    },
    button:{
        justifyContent:'center',
        width: 292,
        height: 123,
        backgroundColor:'#9B9A9A',
        alignItems: 'center',
        borderRadius: 40,
        marginHorizontal: 50,
        marginVertical: 15
    },
    textStyle:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 32,
        marginTop: 15,
    }
});
export default EnterPr;
