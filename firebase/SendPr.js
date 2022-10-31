import { setDoc, doc } from "firebase/firestore"; 
import db from '../firebase/firestore';
import getCurrentDate from "../appFunctions/getCurrentDate";

const SendRepPr = async ({exercise,value}) => {
    try{
    await setDoc(doc(db,exercise,{getCurrentDate}),{
        Rep:{value},
        },{merge:true});
  }catch(error){
    console.log(error)
  }
}
export default SendRepPr;