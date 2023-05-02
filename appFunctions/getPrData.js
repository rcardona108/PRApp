import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import db from "../firebase/firestore"
import { useEffect, useState } from "react";


const getPrData = async () => {
  const colRef = collection(db, "UsersData");
  const q = query(colRef, where("Exercise", "==", "Bench"));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot.forEach((doc)=>{
        console.log(doc.id, " => ", doc.data());
      })
);
  
  
}
export default getPrData;