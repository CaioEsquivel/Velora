import './Header.css'
import { Logo } from '../Logo/Logo'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { WarningPopup } from '../RemovePopup/WarningPopup'

export const Header = ({loading, setLoading,searchValue,setSearchValue,productsFilterArr, setProductsFilterArr,productsArr, setProductsArr,warning, setWarning,setTitleWarning,setDetailsWarning})=>{

    const navigate = useNavigate()
    const location = useLocation()

    const [accountMenu, setAccountMenu] = useState(false)
    const [cartMenu, setCartMenu] = useState(false)
    const [userCart, setUserCart] = useState(null)

    const userData = JSON.parse(localStorage.getItem('user')) 
    useEffect(()=>{
        const getCart = async ()=>{
            const res =  await fetch('https://dummyjson.com/carts')
            const userCartData = await res.json()
            setUserCart(userCartData.carts.find(el=>{
                return el.id === userData.id
            }))
            
            
            
        }
        getCart()
    },[])

    useEffect(()=>{
        setLoading(false)
    },[])

    useEffect(()=>{
        if(accountMenu || cartMenu){
            document.body.style.overflowY = 'hidden'
        }else{
            document.body.style.overflowY = 'auto'
            
        }
        
        console.log(userCart);

    },[accountMenu, cartMenu])
    useEffect(()=>{
        console.log(warning);
        
        if(warning){
            setTimeout(() => {
                setWarning(false)
            }, 5000);
        }
    },[warning])
    useEffect(()=>{
        console.log(searchValue);
        
    },[searchValue])
    


    return(
        <>
        <header>
            <div className="top-announcement">
                <div className="announcement-text">
                    <i className="ri-alarm-line"></i>
                    <p>Frete grátis pra todo o Brasil nas compras acima de R$199</p>
                </div>
                <div className="announcement-btn-container">
                    <a href='#' className="announcement-btn">
                        <i className="ri-customer-service-fill"></i>
                        Atendimento
                    </a>
                    <a href='#' className="announcement-btn">
                        <i className="ri-truck-line"></i>
                        Rastreamento de pedido 
                    </a>
                    <a href='#' className="announcement-btn">
                        <i className="ri-loop-right-line"></i>
                        Trocas e Devoluções
                    </a>
                </div>
            </div>
            <div className="main-header">

                
                <Logo imgSize={{width: '120px'}} />

                <div className="search-input">
                        <input onChange={(e)=>setSearchValue(e.target.value)} value={searchValue} type="text" /> 
                        <button onClick={()=>{
                            if (/[0-9]/.test(searchValue)){
                                setSearchValue('')
                                return;
                            }
                            if(location.pathname === '/Products'){
                                navigate('/Shopping');
                            }
                            
                            setProductsFilterArr(productsArr.products.filter(el=>el.title.toLowerCase().includes(searchValue.toLowerCase()) || el.tags.some(el=>el.toLowerCase().includes(searchValue.toLowerCase()))))
                            
                        }}><i className="ri-search-line"></i></button>
                    </div>

                <div className="header-btn">

                    <div onClick={()=>setAccountMenu(true)} className="header-account">
                    <i className="ri-user-line"></i>
                        <div  className="account-message">
                            <p>Olá,</p>
                            <span>{userData.username}</span>

                        </div>
                            <div className={`account-popup ${accountMenu? 'account-open' : ''}`}>
                                <span><img src={userData.image} alt="" /> <p>{userData.firstName} {userData.lastName}</p></span>
                                <p>Email: {userData.email}</p>
                                <button onClick={()=>{setLoading(true); localStorage.removeItem('Token'); localStorage.removeItem('Token'); location.reload()}} className='log-out'>Sair</button>
                                <button onClick={(e)=>{e.stopPropagation(); setAccountMenu(false)}} className='account-close'><i className="ri-close-line"></i></button>
                            </div>
                    </div>

                    <div onClick={()=>setCartMenu(true)} className="header-cart">
                    <i className="ri-shopping-cart-line"></i>
                        <div className="cart-message">
                            <p>Carrinho</p>
                            <span>{userCart?.totalProducts}</span>
                        </div>
                    


                    </div>

                    
                    
                </div>
            </div>
            <nav className="bottom-header">
                <a href="#">Início</a>
                <a href="#">Ofertas do dia</a>
                <a href="#">Mais Vendidos</a>
                <a href="#">Novidades</a>
                <a href="#">Eletrônicos</a>
                <a href="#">Casa e Decoração</a>
                <a href="#">Moda</a>
                <a href="#">Beleza</a>
                <a href="#">Esportes</a>
                <a href="#">Brinquedos</a>
            </nav>


        </header>

        <div className={`cart-popup-container ${cartMenu? 'cart-container-open' : ''}`}>
            {userCart?.products?.map(el=>{
                return(
                    <div key={el.id} className="cart-popup-items">
                        <img src={el.thumbnail} alt="" />
                        <div className="cart-popups-items-details">
                            <h3>{el.title}</h3>
                            <span>
                                <p>Qtd. {el.quantity}</p>
                                <span>
                                    <button onClick={async ()=>{
                                        const res = await fetch(`https://dummyjson.com/carts/${userCart.id}`,{
                                            method:'PUT',
                                            headers:{'Content-Type':'application/json'},
                                            body: JSON.stringify({
                                                merge:true,
                                                products:[
                                                    {
                                                        id:el.id,
                                                        quantity: (el.quantity + 1)
                                                    }
                                                ]
                                            })
                                        })
                                        if(!res.ok){
                                            throw new Error('erro ao atualizar')
                                        }
                                        const data = await res.json()
                                        setUserCart(data)
                                        console.log(data);
                                        

                                    }}  className='plus-qtd'><i className="ri-add-line"></i></button>
                                    <button onClick={async ()=>{
                                        const res = await fetch(`https://dummyjson.com/carts/${userCart.id}`,{
                                            method:'PUT',
                                            headers:{'Content-Type':'application/json'},
                                            body: JSON.stringify({
                                                merge:true,
                                                products:[
                                                    {
                                                        id:el.id,
                                                        quantity: (el.quantity - 1)
                                                    }
                                                ]
                                            })
                                        })
                                        if(!res.ok){
                                            throw new Error('erro ao atualizar')
                                        }
                                        const data = await res.json()
                                        setUserCart(data)
                                        console.log(data);
                                        

                                    }}  className='minus-qtd'><i className="ri-subtract-line"></i></button>
                                    <button onClick={async ()=>{
                                        try {
                                            const res = await fetch(`https://dummyjson.com/carts/${el.id}`,{
                                                method:'delete',
                                            })
    
                                            if(!res.ok){
                                                throw new rror('error')
                                                ;
                                            }
    
                                            const deleteData = await res.json()
                                            console.log(deleteData);
                                            
                                            setWarning(true)
                                            setTitleWarning('Removido com sucesso.')
                                            setDetailsWarning('Infelizmente pelo motivo da API ser pública, o item não pode ser removido de fato.')
                                            
                                        } catch (error) {
                                            console.log(error);
                                            
                                        }

                                        
                                        

                                    }} className='cart-delete' ><i className="ri-delete-bin-line"></i></button>
                                </span>
                            </span>
                            <p>${el.price}</p>
                        </div>

                    </div>
                )
            }
        )}
        <button onClick={()=>setCartMenu(false)}><i className="ri-close-line"></i></button>
        </div>










        <div onClick={()=>{setAccountMenu(false); setCartMenu(false)} } className={`account-popup-bg ${accountMenu || cartMenu ? 'open-account-bg' : ''}`}></div>
        </>
    )
}