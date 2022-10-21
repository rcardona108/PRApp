import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext,AuthProvider } from "../navigation/AuthProvider";
import { UserContext } from "../Screens/AuthScreen";
import { TouchableOpacity,Text,StyleSheet } from "react-native";
const SubmitLogIn = ({email,password}) => {
    const value = useContext(AuthContext);
    return(
        <TouchableOpacity style = {styles.LogInButton}
            onPress={
                ()=>value.login(email,password)
            }
>

    <Text style = {{color:'white'}}>
        log in
    </Text>
</TouchableOpacity>

    );
};
const styles = StyleSheet.create({
    LogInButton:{
        width:80,
        height:30,
        backgroundColor:'black',
        alignItems:'center'
    },
});

export default SubmitLogIn;