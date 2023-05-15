import { collection, getDocs, orderBy, query, where, limit } from "firebase/firestore";
import db from "../firebase/firestore"


const getInfoData = async () => {
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==","Bench"),orderBy("Weight"), limit(3));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
);
  
  
}
export default getInfoData;