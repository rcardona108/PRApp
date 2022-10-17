import { View, Text, StyleSheet } from 'react-native';

const SubmitPrModal = () => {
    return(
        <View style = {styles.submitBox}>
            <Text style = {styles.submitText}>
                Submit 
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    
    submitBox:{
        justifyContent:'center',
        width: 250,
        height: 50,
        backgroundColor:'#9B9A9A',
        alignItems: 'center',
        borderRadius: 60,
        marginHorizontal: 70,
        marginVertical: -100,
        
    },
    submitText:{
        fontSize:35,
        paddingHorizontal:5,
        fontWeight:'bold',
        color:'white'
    }
});
export default SubmitPrModal;