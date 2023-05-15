import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView,FlatList } from 'react-navigation';
import { collection,query,getDocs,where } from '@firebase/firestore';
import Accordion from './Accordion';
import { useEffect,useState } from 'react';
import db from '../../firebase/firestore';
import getPrData from '../../appFunctions/getPrData';
export default LogDrop = () => {
    const [weight,setWeight] = useState()
    const [reps,setReps] = useState()
    //     useEffect(()=>{
    //         const load = async () => {
    //             const snapshot = await getPrData();
    //             snapshot.forEach((doc) => {
    //                 setWeight(doc.data().Weight.Weight);
    //                 setReps(doc.data().Reps.Reps);
    //             });
    //           };
          
    //         load();
    // },[])
        
       
       
        return(
            <ScrollView>
             <SafeAreaView>
                 <Accordion ExerciseName={'Bench'} RepList={reps} weight={weight}/>
                 <Accordion ExerciseName={'Shoulder Press'} RepList={10} />
                 <Accordion ExerciseName={'DeadLift'} RepList={10} />
                 <Accordion ExerciseName={'Squat'} RepList={10} />
                 <Accordion ExerciseName={'Barebell Row'} RepList={10} />
             </SafeAreaView>
             </ScrollView>
         );
 };