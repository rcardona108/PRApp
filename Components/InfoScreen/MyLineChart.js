import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import { LineChart } from 'react-native-chart-kit'
import GetPrAverage from '../../appFunctions/GetPrAverage'
import { useSelector } from 'react-redux'

const MyLineChart = ({exercise}) => {
  console.log("open chart");
  console.log(exercise);
  const stateUser = useSelector(state => state.UserInfo).UserID;
  const [Suser,setUser] = useState(stateUser);
  const [volume, setVolume] = useState(0);
  const [totalReps,setTotalReps] = useState(0);
  const sum = [];
  useEffect(()=>{    

    const getSum = () => {
      return(volume/totalReps);
    }
    
    const load = async () => {
      for(let i=1;i<=12;i++){
        const snapshot = await GetPrAverage({user:Suser,setUser:{setUser},Exercise:{exercise},Month: i });
        snapshot.forEach((doc) => {
            setVolume(volume + (doc.data().Weight.Weight*doc.data().Reps.Reps))
            setTotalReps(totalReps + doc.data().Reps.Reps)
        },[])

        if(i=1){
          sum.push({Jan:{getSum}})
        }
        else if(i==2){
          sum.push({Feb:{getSum}})

        }
        else if(i==3){
          sum.push({Mar:{getSum}})

        }else if(i==4){
          sum.push({Apr:{getSum}})

        }
        else if(i==5){
          sum.push({May:{getSum}})

        }
        else if(i==6){
          sum.push({June:{getSum}})

        }
        else if(i==7){
          sum.push({July:{getSum}})

        }
        else if(i==8){
          sum.push({Aug:{getSum}})

        }
        else if(i==9){
          sum.push({Sept:{getSum}})

        }else if(i==10){
          sum.push({Oct:{getSum}})

        }
        else if(i==10){
          sum.push({Nov:{getSum}})

        }
        else if(i==12){
          sum.push({Dec:{getSum}})

        }
        }

      }
    load();
    console.log(sum.Sept)
},[])

  return (
  
      <View>
          <Text style = {styles.textStyles}>
            
          </Text>
          <LineChart
            data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept","Oct","Nov","Dec"],
                datasets: [
                  {
                    data: [
                      
                     200,
                     223,
                     225,
                     230,
                     240,
                     260,
                     260,
                     265,
                     265,
                     263,
                     268,
                     270,
                    300
                    /*
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
                     */
                     


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