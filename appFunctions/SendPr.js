import { useContext, useEffect } from "react"
import { AuthProvider } from "../navigation/AuthProvider"

const SendPr = (exercise,reps,weight) => {
    const value = useContext(AuthProvider)
    return(
    useEffect(()=>{
        console.log(value.user.uid)
        
    })
    )
}
export default SendPr;