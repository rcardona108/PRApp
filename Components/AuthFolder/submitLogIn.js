import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../../navigation/AuthProvider";
import { UserContext } from "../../Screens/AuthScreen";
import { TouchableOpacity,Text,StyleSheet } from "react-native";
const SubmitLogIn = ({email,password}) => {
    const value = useContext(AuthContext);
    return(
        <TouchableOpacity style = {styles.LogInButton}
            onPress={
                ()=>value.login(email,password)
            }
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