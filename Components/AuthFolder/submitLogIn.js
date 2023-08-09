import { useNavigation } from "@react-navigation/native";
import {signInWithEmailAndPassword} from 'firebase/auth';

import { useContext } from "react";
import { AuthContext, AuthProvider } from "../../navigation/AuthProvider";
import { Alert } from 'react-native';
import { TouchableOpacity,Text,StyleSheet } from "react-native";
import authApp from '../../firebase/firebaseAuth';
import SetUserID from '../../redux/Actions/AuthActions';
import {useDispatch} from 'react-redux';

const SubmitLogIn = ({email,password}) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const login = async () => {
        try {
          await signInWithEmailAndPassword(authApp,email, password)// signes user in to app
          .then(UserCredential => {
              dispatch(SetUserID(UserCredential.user.uid))// gives the user variable the credential
              navigation.navigate("Home");
            });
        } catch (e) {
          console.log(e)
          Alert.alert('wrong credentials')//Alerting the user that the credentials are wrong
        }
      }
    return(
        <TouchableOpacity style = {styles.LogInButton}
            onPress={
                ()=>login()
            } //Logs In user to app
>

    <Text style = {{color:'black', fontWeight:'bold', marginTop:18, fontSize:25}}>
        Log In
    </Text>
</TouchableOpacity>

    );
};
const styles = StyleSheet.create({
    LogInButton:{
        width:150,
        height:70,
        backgroundColor:'#9B9A9A',
        alignItems:'center',

        borderColor:'white',
        borderWidth:2,
        marginBottom:4,
        borderRadius:40,
        marginLeft:-30,
        
    },
});

export default SubmitLogIn;