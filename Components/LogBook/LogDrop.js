import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView,FlatList } from 'react-navigation';
import { collection,query,getDocs,where } from '@firebase/firestore';
import Accordion from './Accordion';
import { useEffect } from 'react';
import db from '../../firebase/firestore';
import getPrData from '../../appFunctions/getPrData';
export default LogDrop = () => {
        // const colRef = collection(db, "UsersData");
        // const q = query(colRef, where("Exercise", "==", "Bench"));  
        // const querySnapshot = await getDocs(q)
    //     const docData = querySnapshot.forEach((doc)=>{
    //       console.log(doc.data())
    //   });
        
       
        useEffect( ()=>{
           getPrData()
        },[])
        return(
            <ScrollView>
             <SafeAreaView>
                 <Accordion ExersizeName={'Bench'} RepList={10} />
                 <Accordion ExersizeName={'Shoulder Press'} RepList={10} />
                 <Accordion ExersizeName={'DeadLift'} RepList={10} />
                 <Accordion ExersizeName={'Squat'} RepList={10} />
                 <Accordion ExersizeName={'Barebell Row'} RepList={10} />
             </SafeAreaView>
             </ScrollView>
         );
 };