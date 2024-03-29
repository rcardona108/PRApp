import { collection, query, where, getDocs, db } from "firebase/firestore";

const getAllPr = async (data) => {
    const user = data["user"]; 
    const Exercise = data["Exercise"]
    const month = data["Month"]
    const colRef = collection(db, "UsersData");
    const q = query(colRef,where("Exercise.Exercise","==",Exercise),where("User","==",user),where("Month","==",month),orderBy("Weight","desc"));  
    const querySnapshot = await getDocs(q);
      return (
        querySnapshot
    );
  }
export default getAllPr;

// async function PrAverageData (exercise, month) {
//     //Pulls data from firebase for a certain exercise for a certain month the averages it
    
//     const q = query(collection(db, "UsersData"), where("Exercise", "==", exercise) && where("Month", "==", month));
//     const [Counter, setCounter] = useState(1);
//     const [SetsCounter, setSetsCounter] = useState(1);
//     const [Total,setTotal] = useState(0);
//     const [AmtExercise, setAmtExercise] = useState(0);
//     const [FinalAVG, setFinalAVG] = useState(0);
//     //const [FaultCounter, setFaultCounter] = useState(0);
//     //const [AmtDays, setAmtDays] = useState();
//    // let dates = month + "-" + Counter + "-" + "2023" + SetsCounter;
//    // let docRef = doc(db, "UsersData", dates)
//    // let docSnap = getDoc(docRef);
//    /* if (month.equals(1)){
//         setAmtDays(31);
//     }
//     if (month.equals(2)){
//         setAmtDays(28);
//     }
//     if (month.equals(3)){
//         setAmtDays(31);
//     }
//     if (month.equals(4)){
//         setAmtDays(30);
//     }
//     if (month.equals(5)){
//         setAmtDays(31);
//     }
//     if (month.equals(6)){
//         setAmtDays(30);
//     }
//     if (month.equals(7)){
//         setAmtDays(31);
//     }
//     if (month.equals(8)){
//         setAmtDays(31);
//     }
//     if (month.equals(9)){
//         setAmtDays(30);
//     }
//     if (month.equals(10)){
//         setAmtDays(31);
//     }
//     if (month.equals(11)){
//         setAmtDays(30);
//     }
//     if (month.equals(12)){
//         setAmtDays(31);
//     }
//     /*

//    do {
// 	 do {
// 		if (docSnap.exists()){
// 	        if(docSnap.Exercise() = exercise){
//                 setTotal(Total + (docSnap.Weight() * docSnap.Reps()));
//                 setAmtExercise(AmtExercise + docSnap.Reps());
//             }
//             setSetsCounter(SetsCounter + 1);
// 		}
//         else{
//         setSetsCounter(SetsCounter + 1);
//         setFaultCounter(FaultCounter + 1);
//         }

            
// 	} while (FaultCounter!=10);
    
// } while (Counter < AmtDays);
// */


// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   setTotal(Total + (doc.Weight()*doc.Reps()));
//   setAmtExercise(AmtExercise + doc.Reps());
//   if(AmtExercise == 0){
//     setAmtExercise(1);
//   }
  
//   //console.log(doc.id, " => ", doc.data());
// });
// return(
    
// setFinalAVG(Total/AmtExercise)
// );

// }
// export default PrAverageData;