import { useEffect, useState } from "react"
import useRefreshToken from "../hooks/useRefreshToken.jsx"
import useAuth from "../hooks/useAuth"

const PersistLogin = () => {
    const [isLoading , setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const {auth , persist} = useAuth();
  return (
    <div>PersistLogin</div>
  )
}

export default PersistLogin