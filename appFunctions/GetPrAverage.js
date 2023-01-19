import React,{ useState } from "react";
import { doc, getDoc } from "firebase/firestore";

const PrAverageData = (exersize, month) => {
    //Pulls data from firebase for a certain exersize for a certain month the averages it
    const [Counter, setCounter] = useState(1);
    const [SetsCounter, setSetsCounter] = useState(1);
    const [Total,setTotal] = useState(0);
    const [AmtExersize, setAmtExersize] = useState(0);
    const [FinalAVG, setFinalAVG] = useState(0);
    const [FaultCounter, setFaultCounter] = useState(0);
    const [AmtDays, setAmtDays] = useState();
    let dates = month + "-" + Counter + "-" + "2023" + SetsCounter;
    let docRef = doc(db, "UsersData", dates)
    let docSnap = getDoc(docRef);
    if (month.equals(1)){
        setAmtDays(31);
    }
    if (month.equals(2)){
        setAmtDays(28);
    }
    if (month.equals(3)){
        setAmtDays(31);
    }
    if (month.equals(4)){
        setAmtDays(30);
    }
    if (month.equals(5)){
        setAmtDays(31);
    }
    if (month.equals(6)){
        setAmtDays(30);
    }
    if (month.equals(7)){
        setAmtDays(31);
    }
    if (month.equals(8)){
        setAmtDays(31);
    }
    if (month.equals(9)){
        setAmtDays(30);
    }
    if (month.equals(10)){
        setAmtDays(31);
    }
    if (month.equals(11)){
        setAmtDays(30);
    }
    if (month.equals(12)){
        setAmtDays(31);
    }

   do {
	 do {
		if (docSnap.exists()){
	        if(docSnap.Exersize() = exersize){
                setTotal(Total + (docSnap.Weight() * docSnap.Reps()));
                setAmtExersize(AmtExersize + docSnap.Reps());
            }
            setSetsCounter(SetsCounter + 1);
		}
        else{
        setSetsCounter(SetsCounter + 1);
        setFaultCounter(FaultCounter + 1);
        }

            
	} while (FaultCounter!=10);
    
} while (Counter < AmtDays);

}
export default PrAverageData;