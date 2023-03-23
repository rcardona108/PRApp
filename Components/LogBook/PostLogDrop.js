import { useEffect, useState } from 'react';
import {View,Text} from 'react-native';
import ExerciseInfoButton from '../InfoScreen/ExerciseInformationButton';
import getPrData from '../../appFunctions/getPrData';
import { collection, doc,query,where,orderBy } from 'firebase/firestore';
import {db} from '../../firebase/firestore';
const PostLogDrop = ({style,RepCount,exercise}) => {
    const q = query(collection(db,'UsersData'),where('reps','==',RepCount),orderBy('Weight','desc'));
    const querySnapshot = getDocs(q);

    // useEffect(() => {
        
    //     const max = querySnapshot.forEach((doc) => {
    //           console.log(doc.data())
    //     });
    
    //     // Stop listening for updates when no longer required
    //     return () => max();
    //   }, []);
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
