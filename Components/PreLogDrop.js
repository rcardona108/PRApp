import {View,Text,StyleSheet} from 'react-native';
const PreLogDrop = ({ExersizeName}) => {
    
    return(
            <View>
                <Text style = {styles.ShoulderPressText}>
                    {ExersizeName}
                </Text>
                <View style = {styles.line}></View>
                <Text style = {styles.continueDots}>
                    ...
                </Text>
            </View>
    );
};

const styles = StyleSheet.create({
ExersizeText:{
    color:'white',
    fontWeight: 'bold',
    fontSize:45,
    marginVertical:10,
    textAlign:'center'
},
ShoulderPressText:{
    color:'white',
    fontWeight: 'bold',
    fontSize:40,
    marginVertical:10,
    textAlign:'center'
},
line:{
    width:290,
    height:7,
    backgroundColor:'black',
    marginTop:0,
    borderRadius:15
},
continueDots:{
    color:'white',
    fontSize:180,
    fontWeight:'bold',
    marginTop:-130,
    marginLeft:80
  },

});
export default PreLogDrop;