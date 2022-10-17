import {View,Text} from 'react-native'
const PostLogDrop = ({style,RepCount}) => {
    return(
        <View>
        <View style = {style}>
            <Text style = {{textAlign:'center',fontSize:40,width:100,color:'white',fontWeight:'bold'}}>
               {RepCount}
           </Text>
           
        </View>
        <Text style = {{textAlign:'center',fontSize:60,color:'white',fontWeight:'bold'}}>
            135
        </Text>
        </View>
     );
    };
export default PostLogDrop;
