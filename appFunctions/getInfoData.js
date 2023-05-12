import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import db from "../firebase/firestore"


const getInfoData = async ({exercise}) => {
  const colRef = collection(db, "UsersData");
  const q = query(colRef,where("Exercise.Exercise","==",exercise),orderBy("Weight"), limit(3));  
  const querySnapshot = await getDocs(q)
  
    return (
      querySnapshot
);
  
  
}
export default getInfoData;