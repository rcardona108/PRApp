import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { FlatList, SectionList } from "react-native";

const DATA = [
    { title: 1, data: 'A' },
    { title: 2, data: 'B' },
    { title: 3, data: 'C' },
    { title: 4, data: 'D' },
    { title: 5, data: 'E' },
    { title: 6, data: 'F' },
  ];


const ExerciseGrid = () => {
    //shows the sets
    
    const [windowLength,setWindowLength] = useState(Dimensions.get('window'));
    
    
      return (
        <View>
        <SectionList
          style={styles.container}
          keyExtractor={(item, index) => item + index}
          numRows={5}
        
          sections={DATA}
          renderItem={({item}) => (
            <View >
              <Text style = {styles.textStyles}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style = {styles.textStyles}>{title}</Text>
          )}
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
        color: "#FFFFFF"

    }


});
export default ExerciseGrid;
