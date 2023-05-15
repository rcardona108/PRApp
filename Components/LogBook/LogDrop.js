import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView,FlatList } from 'react-navigation';
import { collection,query,getDocs,where } from '@firebase/firestore';
import Accordion from './Accordion';
import { useEffect,useState } from 'react';
import db from '../../firebase/firestore';
import getBenchPr, {getDeadliftPr,getRowPr,getShoulderPr,getSquatPr} from '../../appFunctions/getPrData';
export default LogDrop = () => {
    const [BenchWeight,setBenchWeight] = useState()
    const [BenchReps,setBenchReps] = useState()

    const [ShoulderWeight,setShoulderWeight] = useState()
    const [ShoulderReps,setShoulderReps] = useState()

    const [DeadliftWeight,setDeadliftWeight] = useState()
    const [DeadliftReps,setDeadliftReps] = useState()

    const [SquatWeight,setSquatWeight] = useState()
    const [SquatReps,setSquatReps] = useState()

    const [BarbellRowWeight,setBarbellRowWeight] = useState()
    const [BarbellRowReps,setBarbellRowReps] = useState()
    useEffect(()=>{
        const load = async ({exName}) => {
            if(exName == "Bench"){
            const snapshot = await getBenchPr();
            snapshot.forEach((doc) => {
                setBenchWeight(doc.data().Weight.Weight)
                setBenchReps(doc.data().Reps.Reps)
            },[])
            }else if(exName=="Shoulder Press"){
                const snapshot = await getShoulderPr();
                snapshot.forEach((doc) => {
                    console.log(doc.data().Weight.Weight)
            },[])
            }
            else if(exName=="Deadlift"){
                const snapshot = await getDeadliftPr();
                snapshot.forEach((doc) => {
                    console.log(doc.data().Weight.Weight)
            },[])
            }
            else if(exName=="Squat"){
                const snapshot = await getSquatPr();
                snapshot.forEach((doc) => {
                    console.log(doc.data().Weight.Weight)
            },[])
            }else{
                const snapshot = await getRowPr();
                snapshot.forEach((doc) => {
                    console.log(doc.data().Weight.Weight)
            },[])
            }
          };

        load({exName:"Bench"});
        load({exName:"Shoulder Press"});
        load({exName:"Deadlift"});
        load({exName:"Squat"});
        load({exName:"Barbell Row"})


},[])
        
       
       
        return(
            <ScrollView>
             <SafeAreaView>
                 <Accordion ExerciseName={'Bench'} RepList={BenchReps} weight={BenchWeight}/>
                 <Accordion ExerciseName={'Shoulder Press'} RepList={10} />
                 <Accordion ExerciseName={'DeadLift'} RepList={10} />
                 <Accordion ExerciseName={'Squat'} RepList={10} />
                 <Accordion ExerciseName={'Barebell Row'} RepList={10} />
             </SafeAreaView>
             </ScrollView>
         );
 };