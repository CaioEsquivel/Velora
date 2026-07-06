import './LandingHotProducts.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductPopup } from '../ProductPopup/ProductPopup'

export const LandingHotProducts = ({popupOpen,setPopupOpen,setTitleWarning,setDetailsWarning,setWarning })=>{

    const [productItems, SetProductItems] = useState([])
    // const [popupOpen,setPopupOpen] = useState(false)
    const [productID, setProductID] = useState(0)

    const userData = JSON.parse(localStorage.getItem('user')) 
    
    const product = productItems.find(el=>el.id === productID)
    console.log(product);
    

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>{
            if(!res.ok){
                throw Error('erro nos produtos')
                return
            }
            return res.json()
        }).then(data=>{
            const productArr = data.products.slice(0, 4)
            SetProductItems(productArr)
            console.log(productArr);
                
        })
    },[])

    useEffect(()=>{
        if(popupOpen){
            document.body.style.overflowY = 'hidden'
        }else{
            document.body.style.overflowY = 'auto'
            
        }

    },[popupOpen])

    return(
        <>
        <main className="main-hot">
            <div className="top-main">
                <h3>Mais vendidos</h3>
                <Link to={'/Shopping'}>Ver Todos</Link>
            </div>

            <div className="hot-products-container">
                {productItems.map(el=>{
                    return(
                        <div key={el.id} onClick={()=>{setProductID(el.id); setPopupOpen(true)}} className="hot-products">
                            <img src={el.images[0]} alt="" />
                            <h3>{el.title}</h3>

                            <span>{[...Array(5)].map((_,index)=>{
                                if(index + 1 <= el.rating){
                                    return <i key={index} className="ri-star-fill"></i>
                                }
                                if(index < el.rating){
                                    return <i key={index} className="ri-star-half-line"></i> 
                                }
                                return <i key={index} className="ri-star-line"></i> 
                            })}</span>

                            <p>${el.price}</p>


                        </div>
                    )
                })}
            </div>
        </main>




        <ProductPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} item={product} setTitleWarning={setTitleWarning} setDetailsWarning={setDetailsWarning} setWarning={setWarning} />

        </>
    )
}