import { createContext, useContext, useState } from "react";
import getCurrentDate from '../appFunctions/getCurrentDate'
import db from '../firebase/firestore'
import {setDoc,doc} from 'firebase/firestore'
import { AuthProvider } from "../navigation/AuthProvider";
export const PrContext = createContext({});

export const PrProvider = ({children}) => {
  const [exercise,setExercise] = useState('Select a Exercise');
  const [reps,setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [notes,setNotes] = useState('default note');
  const todayDate = getCurrentDate();
  const userInfo = useContext(AuthProvider)
  return(
    <PrContext.Provider
    value = {{
        exercise,
        setExercise,
        reps,
        setReps,
        weight,
        setWeight,
        notes,
        setNotes,
        sendPrData: async () => {
          try {
            await setDoc(doc(db,'UsersData',userInfo.user),{
              Exercise:{exercise},
              Reps:{reps},
              Weight:{weight},
            });
          }catch(e){
            console.log(e)
          }

        },
        }}
    >
    {children}
    </PrContext.Provider>
  )
}