import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import db from "../firebase/firestore"
import { useEffect, useState } from "react";


const getPrData = ({}) => {
  const colRef = collection(db, "UsersData");
  const q = query(colRef, where("Exercise", "==", "Bench"));  
  const querySnapshot = async () => {
  try{
    await getDocs(q)
  }catch{
    console.log('error')
  }}
  useEffect(()=>{
    querySnapshot.forEach((doc)=>{
      console.log(doc.data())
  });
});
  
  
}
export default getPrData;