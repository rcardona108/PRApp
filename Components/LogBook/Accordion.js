import React, { useState } from "react";
import {
  View,
  LayoutAnimation,
  UIManager,
  Platform,
  StyleSheet,
  FlatList
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import PreLogDrop from "./PreLogDrop";
import PostLogDrop from "./PostLogDrop";
import UpdatePr from "../../appFunctions/UpdatePr";
import TextSizeFormat from "../../appFunctions/textSizeFormatting";
if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const Accordion = ({ ExersizeName, RepList }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleOpen = () => {
      setIsOpen(value => !value);
      
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }
    
    return (
      <>
        <TouchableOpacity onPress={toggleOpen} style = {styles.box} activeOpacity={0.6}>
          <PreLogDrop ExersizeName={ExersizeName}/>
        </TouchableOpacity>
        <View style={[!isOpen ? styles.hidden : styles.popDown]}>
            
            
                 <PostLogDrop style={[!isOpen ? styles.hidden: styles.goalBox]} RepCount={RepList} exercise = {ExersizeName}/>
             
        </View>
      </>
    );
  };
  
const styles = StyleSheet.create({
    hidden: {
        height: 0,
      },
      
      box:{
        height:150,
        width:300,
        borderRadius:60,
        backgroundColor:'#9B9A9A',
        alignItems: 'center',
        marginVertical:30,
        marginHorizontal:44
    },
    ExersizeText:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop:10,
        marginLeft:55
    },

    popDown:{
        backgroundColor:'#8A8A8A',
        height:400,
        width:322,
        borderRadius:30,
        alignContent:'center',
        marginHorizontal:35,
        marginTop:-33,
    },
    goalBox:{
        width:100,
        height:100,
        backgroundColor:'#DAD447',
        marginHorizontal: 110,
        justifyContent: 'center',
        marginTop: 30,
        borderRadius:100,
    }
});
export default Accordion;