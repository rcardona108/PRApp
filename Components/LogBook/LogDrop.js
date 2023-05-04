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
        useEffect(()=>{
            const load = async () => {
                const snapshot = await getPrData();
                snapshot.forEach((doc) => {
                  setWeight(doc.data().Weight.Weight);
                  setReps(doc.data().Reps.Reps)
                });
              };
          
            load();
    },[])
        
       
       
        return(
            <ScrollView>
             <SafeAreaView>
                 <Accordion ExersizeName={'Bench'} RepList={reps} weight={weight}/>
                 <Accordion ExersizeName={'Shoulder Press'} RepList={10} />
                 <Accordion ExersizeName={'DeadLift'} RepList={10} />
                 <Accordion ExersizeName={'Squat'} RepList={10} />
                 <Accordion ExersizeName={'Barebell Row'} RepList={10} />
             </SafeAreaView>
             </ScrollView>
         );
 };