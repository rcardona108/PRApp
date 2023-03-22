import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView,FlatList } from 'react-navigation';
import Accordion from './Accordion';
export default LogDrop = () => {
         return(
            <ScrollView>
             <SafeAreaView>
                 <Accordion ExerciseName={'Bench'} RepList={10} />
                 <Accordion ExerciseName={'Shoulder Press'} RepList={10} />
                 <Accordion ExerciseName={'DeadLift'} RepList={10} />
                 <Accordion ExerciseName={'Squat'} RepList={10} />
                 <Accordion ExerciseName={'Barebell Row'} RepList={10} />
             </SafeAreaView>
             </ScrollView>
         );
 };