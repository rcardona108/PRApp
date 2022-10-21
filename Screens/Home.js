import React, { useContext } from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import { SafeAreaView} from 'react-navigation';
import HomeButton from '../Components/HomeButton';
import * as RootNavigation from '../appFunctions/RootNavigation';
import TestText from '../Components/testText'
import { AuthProvider } from '../navigation/AuthProvider';

const Home = ({navigation}) => {
    return(
        <View style = {{height:'100%',width:'100%',backgroundColor:'#141212'}}>
        
        <SafeAreaView>
            <View style={{marginTop:200}}>{/** navigates to pr entery screen*/}
                <TouchableOpacity onPress={()=>{
            navigation.navigate('PrEntery')
        }}>
            <HomeButton text = 'Pr Entery'/>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:40}}>{/**Navigates to log book */}
                <TouchableOpacity onPress={()=>{
            RootNavigation.navigate('LogBookScreen')
        }}>
                    <HomeButton text = 'Record Book'/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </View>
    );
};
export default Home;

//Put insperational quote at top. Cycle everyday