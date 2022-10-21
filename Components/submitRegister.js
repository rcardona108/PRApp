import { useContext } from 'react';
import { TouchableOpacity,Text,StyleSheet} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
const SubmitRegister = ({email,password}) => {
    const value = useContext(AuthContext);
    return(
    <TouchableOpacity
                style = {styles.RegisterButton}
                onPress = {
                    ()=>value.register(email,password)
                }
            >
                <Text style = {{color:'white'}}>
                    Register
                </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create(
    {
        RegisterButton:{
            width:80,
            height:30,
            backgroundColor:'black',
            alignItems:'center',
        }

}
);
export default SubmitRegister;