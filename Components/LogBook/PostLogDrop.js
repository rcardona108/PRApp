import { useEffect, useState } from 'react';
import {View,Text} from 'react-native';
import ExerciseInfoButton from '../InfoScreen/ExerciseInformationButton';
import getPrData from '../../appFunctions/getPrData';
import { collection, doc,query,where,orderBy } from 'firebase/firestore';
import {db} from '../../firebase/firestore';
import firestore from 'firebase/firestore'
const PostLogDrop = ({style,RepCount,exercise,weight}) => {
    const arr = [1,2,3,4,5,6,7]
    useEffect(()=>{
        const load = async () => {
            const snapshot = await getPrData();
            snapshot.forEach((doc) => {
                console.log(doc.data().Weight.Weight)
            },[])
            //console.log(snapshot.size)
          };
      
        load();
},[])
    return(
        <View>
            <ExerciseInfoButton Exercise = {exercise}/>
            
        <View style = {style}>
        
            
            <Text style = {{textAlign:'center',fontSize:40,width:100,color:'white',fontWeight:'bold'}}>
               {RepCount}
           </Text>
           
        </View>
        <Text style = {{textAlign:'center',fontSize:60,color:'white',fontWeight:'bold'}}>
            {weight}
        </Text>
        </View>
     );
    };
export default PostLogDrop;
