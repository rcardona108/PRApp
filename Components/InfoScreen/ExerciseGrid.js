import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Dimensions } from "react-native";
import { useEffect, useState } from "react";

const ExerciseGrid = () => {
    //shows the sets
    
    const [windowLength,setWindowLength] = useState(Dimensions.get('window'));
    /*useEffect(()=>{
        setWindowLength(Dimensions.get('window'));
    },[]);
    */
    return(
    <View style = {[styles.container,{width: windowLength}]}>
        <View style = {styles.lines}>
            <Text style = {{color:'white'}}>
                LOL
            </Text>
        </View>
        <View style = {[styles.lines, {transform:[{translateX: 200}]}]}>
        
        </View>
        <View style = {styles.lines}>
        <View style = {[styles.lines, {transform:[{translateX: 200}]}]}>
        
        </View>
        
        </View>
        <View style = {styles.lines}>
        
        </View>
        

    </View>
    );
};
const styles = StyleSheet.create({
    container:{
        borderColor: 'white',
        borderWidth: 5,
        height: 200,
        borderRadius: 30,
       

    },
    lines:{
        backgroundColor:'white',
        height: 194,
        width: 3,
        position:'absolute',
        transform: [
            {translateX: 100}
        ],
        
        
    }


});
export default ExerciseGrid;
