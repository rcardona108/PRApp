import { useEffect, useState } from 'react';
import {View,Text} from 'react-native';
import ExerciseInfoButton from '../InfoScreen/ExerciseInformationButton';
import getPrData from '../../appFunctions/getPrData';
const PostLogDrop = ({style,RepCount}) => {
    const [weight,setWeight] = useState()
    // useEffect(()=>{
    //     setWeight(getPrData(RepCount));
    // },[])
    return(
        <View>
            <ExerciseInfoButton/>
        <View style = {style}>
            
            <Text style = {{textAlign:'center',fontSize:40,width:100,color:'white',fontWeight:'bold'}}>
               {RepCount}
           </Text>
           
        </View>
        <Text style = {{textAlign:'center',fontSize:60,color:'white',fontWeight:'bold'}}>
            {getPrData(RepCount)}
        </Text>
        </View>
     );
    };
export default PostLogDrop;
