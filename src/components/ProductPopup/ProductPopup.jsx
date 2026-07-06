import './ProductPopup.css'

export const ProductPopup=({popupOpen,setPopupOpen,item,setTitleWarning,setDetailsWarning,setWarning})=>{
    console.log(item);
    console.log(item?.images);
    return(
        <>
        <div onClick={()=>setPopupOpen(false)} className={`product-info-bg ${popupOpen? 'info-bg-open' : ''}`}></div>
        <div className={`product-info ${popupOpen ? 'info-open' : ''}`}>
            <div className="product-scroll">

            
            {item && (
            <>
                <div key={item.id} className="info-product-main">
                    <img src={item.images[0]} alt="" />
                    <div className="info-essencial">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span>{[...Array(5)].map((_,index)=>{
                        if(index + 1 <= item.rating){
                            return <i key={index} className="ri-star-fill"></i>
                        }
                        if(index < item.rating){
                            return <i key={index} className="ri-star-half-line"></i> 
                        }
                        return <i key={index} className="ri-star-line"></i> 
                    })} </span>

                    <h3>${item.price} <span></span> <p>{item.availabilityStatus} ({item.stock})</p></h3>

                    <p>{item.shippingInformation}</p>
                    <p className="returnPolicy">{item.returnPolicy}</p>
                    <button onClick={()=>{
                        setWarning(true)
                        setTitleWarning('Error')
                        setDetailsWarning('Site feito para fins acadêmicos.')
                    }}>Comprar</button>
                    
                    


                    </div>
                </div>
                <div className="info-line"></div>
                <div className="product-review-container">
                    
                    <h2>Reviews ( {item.reviews.length} )</h2>
                    <div className="product-review">
                        {item && item.reviews.map((el,i)=>{
                            return (


                                <>
                                <div key={i} className="product-review-item">

                                    <div  className="review-profile">
                                        <i className="ri-user-fill"></i>
                                        <p>{el.reviewerName}</p>
                                    </div>
                                    <div className="review-description">
                                        <h3>{[...Array(5)].map((_,i)=>{
                                            if(i + 1 <= el.rating){
                                                return <i key={i}  className="ri-star-fill"></i>
                                            }
                                            
                                            return <i key={i} className="ri-star-line"></i>
                                        })} {el.comment}</h3>
                                        <p>{new Date(el.date).toLocaleDateString('PT-br',{day:"numeric",month:'long',year:'numeric'})}</p>

                                    </div>
                                </div>
                                </>


                            )
                        })}
                    </div>
                </div>

                
            </>
            )}

            </div>

            <div className="product-btn">
                <button onClick={ async ()=>{
                    setWarning(true)
                    setTitleWarning('Produto adicionado ao carrinho.')
                    setDetailsWarning('Infelizmente pelo motivo da API ser pública, o item não pode ser adicionado de fato.')
                    const res = await fetch('https://dummyjson.com/carts/add',{
                        method:'POST',
                        headers:{'content-type': 'application/json'},
                        body: JSON.stringify({
                            userId:userData.id,
                            products:[{
                                id:item.id,
                                quantity: 1,

                            }]
                        })
                    })
                    if(!res.ok){
                        throw new Error('Error')
                    }
                    const data = await res.json()
                    console.log(data);
                    

                }} title="Adicionar ao carrinho" ><i className="ri-shopping-basket-2-fill"></i></button>
                <button onClick={()=>setPopupOpen(false)}><i className="ri-close-line"></i></button>
            </div>
        </div>

        </>
    )
}