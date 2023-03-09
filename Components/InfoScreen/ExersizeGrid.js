import { StyleSheet } from "react-native";
const ExerciseGrid = () => {
    //shows the sets
    <View style = {styles.container}>
        <View style = {styles.lines}>
            
        </View>
        <View style = {[styles.lines, {transform:[{translateX: 200}]}]}>
        
        </View>
        <View style = {styles.lines}>
        <View style = {[styles.lines, {transform:[{translateX: 200}]}]}>
        
        </View>
        <View style = {[styles.lines, {transform:[{translateY: 100}]}]}>
        
        </View>
        </View>
        <View style = {styles.lines}>
        <View style = {[styles.lines, {transform:[{translateY: 100}]}]}>
        
        </View> 
        </View>
        

    </View>
};
const styles = StyleSheet.create({
    container:{
        borderWidth: 5,
        height: 200,
        width: 400,
        borderRadius: 30,

    },
    lines:{
        //backgroundColor:
        height: 194,
        width: 3,
        position:'absolute',
        transform: [
            {translateX: 100}
        ],
        
    }


});
export default ExerciseGrid;
