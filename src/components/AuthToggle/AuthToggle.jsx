import { Link } from 'react-router-dom'
import './AuthToggle.css'
import { Products } from '../../pages/Products'

export const AuthToggle = ()=>{
    return(
        <p className='AuthToggle'>Novo na Velora? <Link to='/Products'>Cadastre-se</Link></p> 
    )
}