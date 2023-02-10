import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import PrAverageData from '../../appFunctions/GetPrAverage'

const MyLineChart = (exersize) => {
  
  return (
      <View>
          <Text style = {styles.textStyles}>
            My Line Chart
          </Text>
          <LineChart
            data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept","Oct","Dec"],
                datasets: [
                  {
                    data: [
                      /*Math.random() * 100,
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
                      Math.random() * 100
                      */
                     PrAverageData(exersize,1),
                     PrAverageData(exersize,2),
                     PrAverageData(exersize,3),
                     PrAverageData(exersize,4),
                     PrAverageData(exersize,5),
                     PrAverageData(exersize,6),
                     PrAverageData(exersize,7),
                     PrAverageData(exersize,8),
                     PrAverageData(exersize,9),
                     PrAverageData(exersize,10),
                     PrAverageData(exersize,11),
                     PrAverageData(exersize,12),


                    ]
                  }
                ]
              }}
            width={400}
            height={300}
            
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