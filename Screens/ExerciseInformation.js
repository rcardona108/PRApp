import React from "react";
import { SectionList, StyleSheet, Text, View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-navigation";
import { LineChart } from "react-native-chart-kit";
import MyLineChart from "../Components/InfoScreen/MyLineChart";
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

 ];

const ExerciseInformationScreen = ({navigation}) => {
   return(
   <SafeAreaView style = {styles.container}>
      <View style = {styles.mainElements}>
        <MyLineChart/>
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
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
     
    },
    title: {
      fontSize: 24
    },
    textStyles:{

    }
});
export default ExerciseInformationScreen;
