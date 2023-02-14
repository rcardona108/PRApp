import React from "react";
import { SectionList, StyleSheet, Text, View, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-navigation";
import { LineChart } from "react-native-chart-kit";
import MyLineChart from "../Components/InfoScreen/MyLineChart";
import ExersizeName from "../Components/Logbook/PreLogDrop";
const Item = ({ title }) => (
   <View style={styles.item}>
     <Text style={styles.title}>{title}</Text>
   </View>
 );
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

const ExerciseInformationScreen = ({navigation}) => {
   return(
   <SafeAreaView style = {styles.container}>
      <View style = {styles.mainElements}>
        <MyLineChart exersize = {ExersizeName}/>
      
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
        marginTop: 50,
    },
    item: {
      
    },
    header: {
      fontSize: 32,
      color:'white'
     
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
