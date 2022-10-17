import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import PrEntery from './Screens/PrEntery'
import EnteryModalScreenRepsBench from './Screens/EnteryModalScreenRepsBench';
import EnteryModalScreenRepsInclineBench from './Screens/EnteryModalScreenRepsInclineBench';
import EnteryModalScreenRepsShoulderPress from './Screens/EnteryModalScreenRepsShoulderPress';
import EnteryModalScreenRepsDeadLift from './Screens/EnteryModalScreenRepsDeadLift';
import EnteryModalScreenRepsSquat from './Screens/EnteryModalScreenRepsSquat';
import EnteryModalScreenRepsBarbellRow from './Screens/EnteryModalScreenRepsBarbellRow';
import EnteryModalScreenWeightBench from './Screens/EnteryModalScreenWeightBench';
import EnteryModalScreenWeightInclineBench from './Screens/EnteryModalScreenWeightInclineBench';
import EnteryModalScreenWeightShoulderPress from './Screens/EnteryModalScreenWeightShoulderPress';
import EnteryModalScreenWeightDeadLift from './Screens/EnteryModalScreenWeightDeadLift';
import EnteryModalScreenWeightSquat from './Screens/EnteryModalScreenWeightSquat';
import EnteryModalScreenWeightBarbellRow from './Screens/EnteryModalScreenWeightBarbellRow';
import LogBookScreen from './Screens/LogBookScreen';
import {navigationRef} from './appFunctions/RootNavigation';
import AuthScreen from './Screens/AuthScreen';
const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}
    > 
      <MainStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName='AuthScreen'
        > 
          <MainStack.Group>
          <MainStack.Screen name = "AuthScreen" component={AuthScreen}/>        
            <MainStack.Screen name = "Home" component={Home}/>        
            <MainStack.Screen name = "PrEntery" component = {PrEntery}/>
            <MainStack.Screen name = "LogBookScreen" component={LogBookScreen}/>
          </MainStack.Group>
          <MainStack.Group screenOptions={{presentation: 'modal'}}>
            <MainStack.Screen name="EnteryModalScreenRepsBench" component={EnteryModalScreenRepsBench} />
            <MainStack.Screen name="EnteryModalScreenRepsInclineBench" component={EnteryModalScreenRepsInclineBench} />
            <MainStack.Screen name="EnteryModalScreenRepsShoulderPress" component={EnteryModalScreenRepsShoulderPress} />
            <MainStack.Screen name="EnteryModalScreenRepsDeadLift" component={EnteryModalScreenRepsDeadLift} />
            <MainStack.Screen name="EnteryModalScreenRepsSquat" component={EnteryModalScreenRepsSquat} />
            <MainStack.Screen name="EnteryModalScreenRepsBarbellRow" component={EnteryModalScreenRepsBarbellRow} />

            <MainStack.Screen name = "EnteryModalScreenWeightBench" component = {EnteryModalScreenWeightBench}/>
            <MainStack.Screen name = "EnteryModalScreenWeightInclineBench" component = {EnteryModalScreenWeightInclineBench}/>
            <MainStack.Screen name = "EnteryModalScreenWeightShoulderPress" component = {EnteryModalScreenWeightShoulderPress}/>
            <MainStack.Screen name = "EnteryModalScreenWeightDeadLift" component = {EnteryModalScreenWeightDeadLift}/>
            <MainStack.Screen name = "EnteryModalScreenWeightSquat" component = {EnteryModalScreenWeightSquat}/>
            <MainStack.Screen name = "EnteryModalScreenWeightBarbellRow" component = {EnteryModalScreenWeightBarbellRow}/>
  
          </MainStack.Group>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;