
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export const useRedirect = () => {
    return <Navigate to="../login" />
}