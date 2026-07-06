import './AuthForm.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const AuthForm = ({loading, setLoading})=>{
    const [UsernameInput, SetUsernameInput] = useState('')
    const [PasswordInput, SetPasswordInput] = useState('')
    const [PasswordShow, SetPasswordShow] = useState(false)
    const [Error, SetError] = useState(false)
    const navigate = useNavigate();




    useEffect(()=>{
        const token = localStorage.getItem('Token')
        setLoading(false)

        if(token){
            navigate('/products')
        }
    },[])

    const handleSubmit =  (event)=>{
        setLoading(true)
        event.preventDefault()
        if(UsernameInput.length < 3 || PasswordInput.length < 3){
            SetError(true)
            setLoading(false)
        }
        
        fetch('https://dummyjson.com/auth/login',{
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                username: UsernameInput,
                password: PasswordInput,
            }),
            credentials: 'include'
        }).then(res=>{
            if(!res.ok){
                SetError(true)
                setLoading(false)
                throw new Error('login inválido')
                return;
            }
            return res.json()})
        .then(data=>{

            console.log('Login Sucedido');
            

            localStorage.setItem("Token", data.accessToken)
            localStorage.setItem("user", JSON.stringify(data))

            navigate('/Products');

            
        })
        .catch(error=>console.log(error)
        ).finally(()=>{
        setLoading(false);
    })

        console.log(UsernameInput);
        console.log(PasswordInput);
        
    };



    return(
        <div className='AuthForm'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input className={`AuthInput ${Error? 'errorInput':''}`} onChange={e=>SetUsernameInput(e.target.value)} value={UsernameInput} id="username" type="username" />

                <label htmlFor="password">Senha</label>
                <div className="password-input">
                    <input className={`AuthInput ${Error? 'errorInput':''}`} onChange={e=>SetPasswordInput(e.target.value)} value={PasswordInput} id="password" type={`${PasswordShow? 'text' : 'password'}`} />
                      <button type='button' onMouseUp={()=>SetPasswordShow(false)} onMouseDown={()=>SetPasswordShow(true)}><i className={`${PasswordShow? 'ri-eye-line' : 'ri-eye-off-line'}`}></i></button>  
                </div>
                <p className={`error-messsage ${Error? 'active':''}`}>Login ou Senha incorretos</p>
                <input id='submit' type="submit" value='Entrar'  />
            </form>

            <span>Ao entrar, você concorda com os <a href="#">Termos de serviços</a> e <a href="#">Termos de privacidade</a> da Velora</span>
        </div>
    )
}