import { useContext } from 'react';
import { TouchableOpacity,Text,StyleSheet} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import { useNavigation } from '@react-navigation/native';
import RegisterModalScreen from '../Screens/RegisterModalScreen';
const SubmitRegister = () => {
    const value = useContext(AuthContext);
    const Navigation = useNavigation();
    return(
    <TouchableOpacity
                style = {styles.RegisterButton}
                onPress = {
                    ()=> Navigation.navigate(RegisterModalScreen)
                }
            >
                <Text style = {{color:'black', fontWeight:'bold', marginTop:18, fontSize:25}}>
                    Register
                </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create(
    {
        RegisterButton:{
            width:150,
            height:70,
            backgroundColor:'#9B9A9A',
            alignItems:'center',
    
            borderColor:'white',
            borderWidth:2,
            marginBottom:4,
            borderRadius:40,
            marginTop:-10,
            marginLeft:-30,
            
        }

}
);
export default SubmitRegister;