import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'

const MyLineChart = () => {
  
  return (
      <View>
          <Text>
            My Line Chart
          </Text>
          <LineChart
            data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept","Oct","Dec"],
                datasets: [
                  {
                    data: [
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
                      Math.random() * 100
                    ]
                  }
                ]
              }}
            width={Dimensions.get('window').width}
            height={200}
            yAxisLabel={'$'}
            chartConfig={{
              backgroundGradientFrom: 'darkblue',
              backgroundGradientTo: 'blue',
              color: (opacity = 3) => `rgba(255, 255, 255, ${opacity})`
            }}
          />
      </View>
  )
}
export default MyLineChart;