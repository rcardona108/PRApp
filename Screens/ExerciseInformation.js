import React, {useState, useEffect}from "react";
import { SectionList, StyleSheet, Text, View, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-navigation";
import { LineChart } from "react-native-chart-kit";
import MyLineChart from "../Components/InfoScreen/MyLineChart";
import { useSelector } from "react-redux";

  const DATA = [
      {
       title: 'sample exercise',
       data: ["30", "25","60"]
      },
      {
       title :'exercise',
       data: ["30", "50"]
      },

  ];

const ExerciseInformationScreen = ({navigation,route}) => {
  const state = useSelector(state => state.infoname).name;
  const [ExerciseName, setExerciseName] = useState();
useEffect(() => {
  console.log(state)
  setExerciseName(state);
}, [state])
console.log(ExerciseName);
   return(
   <SafeAreaView style = {styles.container}>
    <View>
      <Text style = {styles.header}>
      {ExerciseName}
      </Text>
    </View>
      <View style = {styles.mainElements}>
        
        <MyLineChart exercise = {ExerciseName}/>
      
      <FlatList
      
      sections={DATA}
      style = {styles.dataBox}
      
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <View style = {styles.graph}><Text style = {styles.items}>{item}</Text></View>}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      
    />
    
         <Text>
            Hi
         </Text>
      </View>
   </SafeAreaView>

)}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      
      
      backgroundColor: '#141212',

    },
    mainElements:{
        
    },
    item: {
      
    },
    header: {
      fontSize: 32,
      color:'white',
     textAlign: 'center',
     
      marginTop: 40,
     
    },
    items:{
        color: 'white',

    },
    title: {
      fontSize: 24
    },
    graph:{
      borderWidth:3,
      
      borderColor:'white',
      
    },
    dataBox:{
      
      borderWidth: 8,
      borderColor: 'gray',
      borderRadius:30,
      color:'white',


    }
});
export default ExerciseInformationScreen;
