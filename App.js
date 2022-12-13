import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import PrEnteryScreen from './Screens/PrEnteryScreen'
import LogBookScreen from './Screens/LogBookScreen';
import AuthScreen from './Screens/AuthScreen';
import SelectExerciseModal from './Screens/SelectExerciseModal';
import RegisterModalScreen from './Screens/RegisterModalScreen';
import ExerciseInformationScreen from './Screens/ExerciseInformation';
const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer 
    > 
      <MainStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName='AuthScreen'
        > 
          <MainStack.Group>
        
          <MainStack.Screen name = "AuthScreen" component={AuthScreen}/>        
            <MainStack.Screen name = "Home" component={Home}/>        
            <MainStack.Screen name = "PrEnteryScreen" component = {PrEnteryScreen}/>
            <MainStack.Screen name = "LogBookScreen" component={LogBookScreen}/>
            <MainStack.Screen name = "ExerciseInformationScreem" component={ExerciseInformationScreen}/>
          </MainStack.Group>
          <MainStack.Group screenOptions={{presentation: 'modal'}}>
          <MainStack.Screen name ="RegisterModalScreen" component={RegisterModalScreen}/>
            <MainStack.Screen name ="SelectExerciseModal" component={SelectExerciseModal} />
          </MainStack.Group>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;