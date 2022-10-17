import db from '../firebase/firestore';
import { collection, getDocs,query,where} from "firebase/firestore";
import { useState } from 'react';

const UpdatePr = ({liftName,RepCount}) => {
    const [maxWeight,setMaxWeight] = useState('0');
    for(let i = 0;i<RepCount.size();i++)
    {    
        let currentRep = RepCount[i];
        const q = query(collection(db, {liftName}), where("Rep", "=", {currentRep}));
        const querySnapshot = getDocs(q);

        querySnapshot.forEach((doc) => {
            if(doc.data('Weight') > maxWeight){
                setMaxWeight(doc.data('Weight'))

            }
        });

        return (
            console.log(updated)
            );
        }

}
export default UpdatePr;