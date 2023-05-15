import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import db from "../firebase/firestore"


const getBenchPr = async () => {
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==","Bench"),orderBy("Weight","desc"),limit(1));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
);
}
const getShoulderPr = async () => {
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==","Shoulder Press"),orderBy("Weight","desc"),limit(1));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
);
}
const getDeadliftPr = async () => {
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==","Deadlift"),orderBy("Weight","desc"),limit(1));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
);
}
const getSquatPr = async () => {
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==","Squat"),orderBy("Weight","desc"),limit(1));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
);
}
const getRowPr = async () => {
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==","Barbell Row"),orderBy("Weight","desc"),limit(1));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
);
}
export default getBenchPr;
export {getShoulderPr,getDeadliftPr,getSquatPr,getRowPr};
