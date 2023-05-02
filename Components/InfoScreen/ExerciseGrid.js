import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Dimensions, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { FlatList, SectionList } from "react-native";
import { ListItem } from "react-native-elements";
import getCurrentDate from "../../appFunctions/getCurrentDate";



const DATA = [
    { title: "Set", data: 'A' },
    { title: "Reps", data: 'B' },
    { title: "Weight", data:  'S'},
    
  ];
  const itemSeperator = () => {
    return(

    
    <View style = {styles.itemsep}>
      
    </View>
    );
  }
  
  


const ExerciseGrid = () => {
    //shows the sets
    let tempDate = new Date();
    let day = tempDate.getDate();
    let month = tempDate.getMonth() + 1;
    let year = tempDate.getFullYear();
    
    let currentDate = `${month}/${day}/${year}`;
    console.log();
    const[date, setDate] = useState(currentDate);
    
    
    console.log(date);
    const [windowLength,setWindowLength] = useState(Dimensions.get('window'));
    
    


      return (
        <View style={styles.container}>
          <View style = {styles.dateBorder}>
          <View style = {styles.dateSettings}> 
            <TextInput
                placeholderTextColor= 'grey'
                placeholder='Date: m/d/yyyy'
                autoCorrect = {false}
                autoCapitalize='none'
            />



            </View>
          </View>
        <SectionList
          keyExtractor={(item, index) => item + index}
          numRows={5}

         ItemSeparatorComponent = {itemSeperator}
         SectionSeparatorComponent = {itemSeperator}
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
        borderColor: '#9B9A9A',
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
        borderColor:'#9B9A9A',


    },
    textStyles:{
        
        fontSize: 40,
        color: "#FFFFFF"

    },
    itemsep:{
      borderWidth: 3,
      borderColor: '#9B9A9A'
    },
    dateSettings:{
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 45,
      

    },
    dateBorder:{
      borderWidth: 5,
      borderRadius: 25,
      borderColor: '#9B9A9A',
      marginTop: 10,
      marginBottom: 10,

    }


});
export default ExerciseGrid;
