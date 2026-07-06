import './Login.css'
import ship from '../assets/navio.jpg'
import { Logo } from "../components/Logo/Logo"
import { AuthForm } from "../components/AuthForm/AuthForm"
import { AuthToggle } from "../components/AuthToggle/AuthToggle"
import { AuthContainer } from "../components/AuthContainer/AuthContainer"
import { useState } from 'react'



export const Login = ({loading, setLoading}) =>{


    return(
        <main className='main-login'>
                <AuthContainer>
                    <Logo imgSize={{width: '200px'}} />

                    <AuthForm loading={loading} setLoading={setLoading}/>        

                </AuthContainer>


                <div className={`loading ${loading?'active':''}`}>
                        <div class="spinner">
                            <div></div>   
                            <div></div>    
                            <div></div>    
                            <div></div>    
                            <div></div>    
                            <div></div>    
                            <div></div>    
                            <div></div>    
                            <div></div>    
                            <div></div>    
                        </div>
                </div>
        </main>
    )
}