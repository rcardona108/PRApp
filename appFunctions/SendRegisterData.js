import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"
import db from "../firebase/firestore"

const SendRegisterData = async (uid,email,FirstName, LastName) => {



    try{
        await setDoc(doc(db,'UsersData',email),{
            UserFirstName: {FirstName},
            UserLastName: {LastName},
            ID: {uid},
        });
    }
    catch(e){
        console.log(e)
    }
  
};
export default SendRegisterData;