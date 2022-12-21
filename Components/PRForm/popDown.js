import { useContext, useEffect, useState } from "react";
import { TouchableOpacity,StyleSheet,View,LayoutAnimation,UIManager,Platform,useFocusEffect } from "react-native";
import { Children } from "react/cjs/react.production.min";
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
    const [textName,setTextName] = useState(value.exercise);//eventually want to change text based on exercise state
    const toggleOpen = () => {
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setTextName(value.exercise);
        
        console.log(value.exercise);
    }
    useEffect(() =>{
        
        EXERCISE_DATA.forEach(()=>{
            setListHeight(value => value+50)
        })
    
    },[isOpen])
    return(
        <>
            <TouchableOpacity
                onPress = {toggleOpen}
            >
                <SelectExerciseButton  />
            </TouchableOpacity>
            <View>
                <SelectExerciseModal style = {isOpen ? styles.show: styles.hidden} listHeight = {listHeight} name = {textName}/>
            </View>
        </>
    )
  }

  const styles = StyleSheet.create({
    hidden:{
        height:0,
    },
    show:{ backgroundColor: '#9B9A9A', width: 200 }
  });
export default PopDown;
  