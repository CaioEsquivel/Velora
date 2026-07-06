import './Logo.css'
import veloraLogo from '../../assets/VeloraLogo.png'
import { useNavigate, useLocation } from 'react-router-dom'

export const Logo = ({imgSize})=>{
    const navegate = useNavigate()
    const location = useLocation()
    return(
        <>
        <div onClick={()=>{
            if(location.pathname !== '/'){
                navegate('/Products')
            }
        }} className="logo">
            <img src={veloraLogo} style={imgSize} alt="" />
        </div>
        </>
    )
}