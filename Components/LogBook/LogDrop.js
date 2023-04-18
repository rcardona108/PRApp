import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView,FlatList } from 'react-navigation';
import { collection,doc,getDoc } from '@firebase/firestore';
import Accordion from './Accordion';
import { async } from '@firebase/util';
import { useEffect } from 'react';
export default LogDrop =async () => {
        const colRef = collection(db, "UsersData");
        const docRef = doc(colRef, "3-14-2023-1");
        const docSnap = await getDoc(docRef);
        useEffect(()=>{
            console.log(docSnap[1].data())
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