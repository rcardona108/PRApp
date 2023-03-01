import { useEffect, useState } from 'react';
import {View,Text} from 'react-native';
import ExerciseInfoButton from '../InfoScreen/ExerciseInformationButton';
import getPrData from '../../appFunctions/getPrData';
const PostLogDrop = ({style,RepCount,exercise}) => {
    const [weight,setWeight] = useState()
    // useEffect(()=>{
    //     setWeight(getPrData(RepCount));
    // },[])
    return(
        <View>
            <ExerciseInfoButton Exercise = {exercise}/>
            
        <View style = {style}>
        
            
            <Text style = {{textAlign:'center',fontSize:40,width:100,color:'white',fontWeight:'bold'}}>
               {RepCount}
           </Text>
           
        </View>
        <Text style = {{textAlign:'center',fontSize:60,color:'white',fontWeight:'bold'}}>
            130
        </Text>
        </View>
     );
    };
export default PostLogDrop;
