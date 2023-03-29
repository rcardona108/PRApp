import { useEffect, useState } from 'react';
import {View,Text} from 'react-native';
import ExerciseInfoButton from '../InfoScreen/ExerciseInformationButton';
import getPrData from '../../appFunctions/getPrData';
import { collection, doc,query,where,orderBy } from 'firebase/firestore';
import {db} from '../../firebase/firestore';
import firestore from 'firebase/firestore'
const PostLogDrop = ({style,RepCount,exercise}) => {
   
// const usersCollectionRef = db.collection('UsersData');


 useEffect(() => {
    const q = query(collection(db, "UsersData"), where("Reps", "==", 4));

    const querySnapshot = getDocs(q);
    const max = querySnapshot.forEach((doc) => {
    console.log(doc.data());
    });
    //  const max = usersCollectionRef
    //  .where('Reps','==',4)
    //  .get()
    //  .then(querySnapshot => {
    //     querySnapshot.forEach(documentSnapshot => {
    //         console.log('User ID: ', documentSnapshot.data());
    //       });
    //  });
    
    return () => max();
   }, []);
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
