import React,{ useState } from "react";
import { doc, getDoc } from "firebase/firestore";

const PrAverageData = (exersize, month) => {
    //Pulls data from firebase for a certain exersize for a certain month the averages it
    const [Counter, setCounter] = useState(1);
    const [SetsCounter, setSetsCounter] = useState(1);
    const [FinalAVG, setFinalAVG] = useState();
    const [FaultCounter, setFaultCounter] = useState(0);
    let dates = month + "-" + Counter + "-" + "2023" + SetsCounter;
    let docRef = doc(db, "UsersData", dates)
    let docSnap = getDoc(docRef);
    
    do {
	if (docSnap.exists()){
        
	
	    }
} while (FaultCounter!=20);

}
export default PrAverageData;