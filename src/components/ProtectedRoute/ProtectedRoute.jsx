import { Navigate } from "react-router-dom"


export const ProtectedRoute = ({children})=>{

    const token = localStorage.getItem('Token')

    if(token === null){
        return <Navigate to="/" replace />
    }

    return children;

}