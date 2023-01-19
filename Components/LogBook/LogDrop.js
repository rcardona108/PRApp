import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView,FlatList } from 'react-navigation';
import Accordion from './Accordion';
export default LogDrop = () => {
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