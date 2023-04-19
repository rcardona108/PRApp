import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
const data = [
    { id: 1, value: 'A' },
    { id: 2, value: 'B' },
    { id: 3, value: 'C' },
    { id: 4, value: 'D' },
    { id: 5, value: 'E' },
    { id: 6, value: 'F' },
  ];


const ExerciseGrid = () => {
    //shows the sets
    
    const [windowLength,setWindowLength] = useState(Dimensions.get('window'));
    const renderItem = ({ item }) => (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 100 }}>
          <Text style = {styles.textStyles}>{item.value}</Text>
        </View>
      );
    
      return (
        <View>
        <FlatList
          style={styles.container}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
        </View>
      );
    };
    /*useEffect(()=>{
        setWindowLength(Dimensions.get('window'));
    },[]);
    */
    /*return(
    <View style = {[styles.container,{width: windowLength}]}>
        <View style = {styles.boxesTop}>

        </View>
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
    );*/

const styles = StyleSheet.create({
    container:{
        borderColor: 'white',
        borderWidth: 5,
        height: 425,
        
        //padding:3,
       

    },
    lines:{
        backgroundColor:'white',
        height: 194,
        width: 3,
        position:'absolute',
        transform: [
            {translateX: 100}
        ],
        
        
    },
    boxesTop:{
        borderWidth: 3,
        width: 100,
        height:40,
        borderColor:'white',


    },
    textStyles:{
        
        fontSize: 40,

    }


});
export default ExerciseGrid;
