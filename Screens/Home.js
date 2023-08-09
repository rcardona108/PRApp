import React, { useContext, useEffect } from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import { SafeAreaView} from 'react-navigation';
import HomeButton from '../Components/BasicButtons/HomeButton';
import SetExerciseName from '../redux/Actions/SetExerciseName';
import {useDispatch,useSelector} from 'react-redux';
import MyLineChart from '../Components/InfoScreen/MyLineChart';
const Home = () => {
    const dispatch = useDispatch()
    //const state = useSelector(state => state.UserInfo).UserID
    useEffect(() => {
        dispatch(SetExerciseName('select a exercise'));
    },[])

    return(
        <View style = {{height:'100%',width:'100%',backgroundColor:'#141212'}}>
        
        <SafeAreaView>
           
        <MyLineChart exercise={"bench"}/>

            <View style={{marginTop:50}}>{/** navigates to pr entery screen*/}

                <HomeButton text = 'PR Entry' nav = 'PrEnteryScreen'/>
            </View>
            <View style={{marginTop:40}}>{/**Navigates to log book */}
                <HomeButton text = 'Record Book' nav = 'LogBookScreen'/>
            </View>
        </SafeAreaView>
        </View>
    );
};
export default Home;

//Put insperational quote at top. Cycle everyday