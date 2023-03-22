import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import PrAverageData from '../../appFunctions/GetPrAverage'

const MyLineChart = ({exercise}) => {
  console.log("open chart");
  console.log(exercise);
  return (
      <View>
          <Text style = {styles.textStyles}>
            
          </Text>
          <LineChart
            data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept","Oct","Dec"],
                datasets: [
                  {
                    data: [
                      /*
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      */
                      
                     PrAverageData(exercise,1),
                     PrAverageData(exercise,2),
                     PrAverageData(exercise,3),
                     PrAverageData(exercise,4),
                     PrAverageData(exercise,5),
                     PrAverageData(exercise,6),
                     PrAverageData(exercise,7),
                     PrAverageData(exercise,8),
                     PrAverageData(exercise,9),
                     PrAverageData(exercise,10),
                     PrAverageData(exercise,11),
                     PrAverageData(exercise,12),
                     


                    ]
                  }
                ]
              }}
            width={400}
            height={300} //Size of the chart
            
            yAxisSuffix={' lbs'} 

            chartConfig={{
              backgroundGradientFrom: 'gray',
              backgroundGradientTo: 'gray',
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              decimalPlaces: 0,
              style: {
                borderRadius: 30
              },
              propsForDots: {
                r: "4",
                strokeWidth: "1",
                stroke: "black",
                fill: "gray",
              },
              
            }}
            //bezier
            style={{
              
              borderRadius: 16,
              borderBottomEndRadius: 16,
              marginTop: 10,
              

            }}
            
          />
      </View>
  )
}
const styles = StyleSheet.create({

  textStyles:{
    color:'#FFFFFF',
    fontSize: 30,
    textAlign: 'center',

  },
})
export default MyLineChart;