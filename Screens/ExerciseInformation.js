import React from "react";
import { StyleSheet, Text, View, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from 'react-native-chart-kit';
const ExerciseInformationScreen = ({navigation}) => {
   const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43]
        }
      ]
    };
  
    return (
      <View>
        <Text>Graph</Text>
        <LineChart
          data={data}
          width={375} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
        />
      </View>
    );
  };

const styles = StyleSheet.create({

});
export default ExerciseInformationScreen;
