import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import db from "../firebase/firestore"
import getCurrentDate from "./getCurrentDate"
import { useState } from "react";


const getPrData =  ({}) => {
  const colRef = collection(db, "UsersData");
  const q = query(colRef, where("Exercise", "==", "Bench"));  
  const querySnapshot =  getDocs(q);
  const docData = querySnapshot.forEach((doc)=>{
    console.log(doc.data())
});
  
    return(docData)  
}
export default getPrData;