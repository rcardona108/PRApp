import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView,FlatList } from 'react-navigation';
import Accordion from './Accordion';
export default LogDrop = () => {
         return(
            <ScrollView>
             <SafeAreaView>
                 <Accordion ExersizeName={'Bench'} RepList={'12'} />
                 <Accordion ExersizeName={'Shoulder Press'} RepList={'12'} />
                 <Accordion ExersizeName={'DeadLift'} RepList={'12'} />
                 <Accordion ExersizeName={'Squat'} RepList={'12'} />
                 <Accordion ExersizeName={'Barebell Row'} RepList={'12'} />
             </SafeAreaView>
             </ScrollView>
         );
 };