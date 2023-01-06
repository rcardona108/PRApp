import { useContext, useEffect, useState } from "react";
import { Text,TouchableOpacity,StyleSheet,View,LayoutAnimation,UIManager,Platform,useFocusEffect } from "react-native";
import SelectExerciseButton, { setIsOpen } from "./SelectExerciseButton";
import SelectExerciseModal from "../../Screens/SelectExerciseModal";
import { EXERCISE_DATA } from "../../Screens/SelectExerciseModal";
import { PrContext, PrProvider } from "../../appFunctions/PrContext";

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const PopDown = () => {
    const value = useContext(PrContext)
    const [isOpen,setIsOpen] = useState(false) 
    const [listHeight,setListHeight] = useState(0)
    
    //eventually want to change text based on exercise state
    const toggleOpen = ({}) => {
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }     

    useEffect(() =>{
        setTextName(value.exercise)
        EXERCISE_DATA.forEach(()=>{
            setListHeight(value => value+50)
        })
    
    },[isOpen])
    return(
        <View>
            <TouchableOpacity
                onPress = {toggleOpen}
            >
                <View 
                    style={styles.buttonBackground}
                >
                    <Text style = {styles.Text}>{value.exercise}</Text>
                </View>
            </TouchableOpacity>
            <View style = {{alignItems:'center'}}>
                <SelectExerciseModal style = {isOpen ? styles.show: styles.hidden} listHeight = {listHeight} name = {textName}/>
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    hidden:{
        height:0,
    },
    show:{ backgroundColor: '#9B9A9A', width: 250 , borderRadius: 20},
    buttonBackground:{
        backgroundColor: '#9B9A9A',
        width: 335,
        borderRadius:41,
        alignItems:'center',
        marginHorizontal:25,
        height:200,
        justifyContent:'center'
    },
    Text:{
        fontWeight:'bold',
        fontSize:40,
        color:'white',
        alignItems:'center'

    }
  });
export default PopDown;
  