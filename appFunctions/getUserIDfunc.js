import { useState } from "react"
import { useSelector } from "react-redux"
const getUserID = () => {
    const stateUser = useSelector(state => state.UserInfo).UserID;
    const [user,setUser] = useState(null);
    setUser(stateUser);
    return(
        user
    )
}
export default getUserID;