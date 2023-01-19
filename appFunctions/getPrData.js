import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import db from "../firebase/firestore"
import getCurrentDate from "./getCurrentDate"
import { useState } from "react";


const getPrData = ({repCount}) => {
    const [max,setMax] = useState(0)
    const colRef = collection(db,'UsersData')
    const q = query(colRef,where('reps','==',repCount),orderBy('Weight'));
    const querySnapshot = getDocs(q);
    querySnapshot.forEach((doc) => {
        if(doc.weight > max){
            setMax(doc.weight);
        }
    });
  return(
    max
  )
}
export default getPrData;