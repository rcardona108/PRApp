import { createContext, useState } from "react";

export const PrContext = createContext({});

export const PrProvider = ({children}) => {
  const [exercise,setExercise] = useState('Select a Exercise');
  const [reps,setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [notes,setNotes] = useState('');
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
        setNotes
    }}
    >
    {children}
    </PrContext.Provider>
  )
}