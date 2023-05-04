import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import db from "../firebase/firestore"


const getPrData = async () => {
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==","Bench"));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
);
  
  
}
export default getPrData;