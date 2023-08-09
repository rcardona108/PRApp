import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView,FlatList } from 'react-navigation';
import { collection,query,getDocs,where } from '@firebase/firestore';
import Accordion from './Accordion';
import { useEffect,useState } from 'react';
import db from '../../firebase/firestore';
import { useSelector } from 'react-redux';
import getBenchPr, {getDeadliftPr,getRowPr,getShoulderPr,getSquatPr} from '../../appFunctions/getPrData';

export default LogDrop = () => {
    const stateUser = useSelector(state => state.UserInfo).UserID;
    const [Suser,setUser] = useState(stateUser);
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
            const snapshot = await getBenchPr({user:Suser,setUser:{setUser}});
            snapshot.forEach((doc) => {
                setBenchWeight(doc.data().Weight.Weight)
                setBenchReps(doc.data().Reps.Reps)
            },[])
            }else if(exName=="Shoulder Press"){
                const snapshot = await getShoulderPr({user:Suser});
                snapshot.forEach((doc) => {
                    setShoulderWeight(doc.data().Weight.Weight)
                    setShoulderReps(doc.data().Reps.Reps)           
                },[])
            }
            else if(exName=="Deadlift"){
                const snapshot = await getDeadliftPr({user:Suser});
                snapshot.forEach((doc) => {
                    setDeadliftWeight(doc.data().Weight.Weight)
                    setDeadliftReps(doc.data().Reps.Reps)            
                },[])
            }
            else if(exName=="Squat"){
                const snapshot = await getSquatPr({user:Suser});
                snapshot.forEach((doc) => {
                    setSquatWeight(doc.data().Weight.Weight)
                    setSquatReps(doc.data().Reps.Reps)            
                },[])
            }else{
                const snapshot = await getRowPr({user: Suser});
                snapshot.forEach((doc) => {
                    setBarbellRowWeight(doc.data().Weight.Weight)
                    setBarbellRowReps(doc.data().Reps.Reps)            
                },[])
            }
          };

        load({exName:"Bench"});
        load({exName:"Shoulder Press"});
        load({exName:"Deadlift"});
        load({exName:"Squat"});
        load({exName:"Barbell Row"});
},[])
        
       
       
        return(
            <ScrollView>
             <SafeAreaView>
                 <Accordion ExerciseName={'Bench'} RepList={BenchReps} weight={BenchWeight}/>
                 <Accordion ExerciseName={'Shoulder Press'} RepList={ShoulderReps} weight={ShoulderWeight} />
                 <Accordion ExerciseName={'DeadLift'} RepList={DeadliftReps} weight={DeadliftWeight} />
                 <Accordion ExerciseName={'Squat'} RepList={SquatReps} weight={SquatWeight} />
                 <Accordion ExerciseName={'Barbell Row'} RepList={BarbellRowReps} weight={BarbellRowWeight} />
             </SafeAreaView>
             </ScrollView>
         );
 };