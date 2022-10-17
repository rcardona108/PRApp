import { View,StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import LogDrop from "../Components/LogDrop";
const LogBookScreen = () =>{


    return(
        <SafeAreaView style={styles.screen}>
            <LogDrop />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    screen:{
        height:'100%',
        width:'100%',
        backgroundColor:'#141212',
    },

    
});
export default LogBookScreen;