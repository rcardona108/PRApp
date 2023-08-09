import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import db from "../firebase/firestore"
import getUserID from "./getUserIDfunc";
import { useState } from "react";


const getBenchPr = async (data) => {
  const user = data["user"]; 
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==","Bench"),where("User","==",user),orderBy("Weight","desc"),limit(1));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
  );
}

const getShoulderPr = async (data) => {
  const user = data["user"]; 
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==","Shoulder Press"),where("User","==",user),orderBy("Weight","desc"),limit(1));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
  );
}
const getDeadliftPr = async (data) => {
  const user = data["user"]; 
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==","Deadlift"),where("User","==",user),orderBy("Weight","desc"),limit(1));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
);
}
const getSquatPr = async (data) => {
  const user = data["user"]; 
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==","Squat"),where("User","==",user),orderBy("Weight","desc"),limit(1));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
);
}
const getRowPr = async (data) => {
  const user = data["user"]; 
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==","Barbell Row"),where("User","==",user),orderBy("Weight","desc"),limit(1));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
);
}
export default getBenchPr;
export {getShoulderPr,getDeadliftPr,getSquatPr,getRowPr};
