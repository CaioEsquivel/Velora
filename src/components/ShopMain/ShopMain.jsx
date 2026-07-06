import './ShopMain.css'
import { useState,useEffect } from 'react'

export const ShopMain=({categoryOpen, setCategoryOpen,popupOpen,setProductSelected,setPopupOpen,productsFilterArr, setProductsFilterArr,productsArr, setProductsArr, searchValue,setSearchValue})=>{
    const [categoryArr, setCategoryArr] = useState(null)
    const [priceOpen, setPriceOpen] = useState(false)
    const [check, setCheck] = useState(0)


    useEffect(()=>{
            if(popupOpen){
                document.body.style.overflowY = 'hidden'
            }else{
                document.body.style.overflowY = 'auto'
                
            }
    
        },[popupOpen])
    
        useEffect(()=>{
            fetch('https://dummyjson.com/products')
            .then(res=>{
                if(!res.ok){
                    throw new Error('erro')
                }
    
    
                return res.json()
            }).then(data=>{
                console.log(data);
                setProductsArr(data);  
                if(searchValue !== ''){

                    setProductsFilterArr(data.products.filter(el=>el.title.toLowerCase().includes(searchValue.toLowerCase()) || el.tags.some(el=>el.toLowerCase().includes(searchValue.toLowerCase()))))
                }else{

                    setProductsFilterArr(data.products)
                }
                return data          
            }).then(data=>{
                const arr = [];
                data.products.forEach(el=>{
                    if(!arr.includes(el.category)){
                        arr.push(el.category)
                        console.log(arr);
                        
                    }
    
                });
                setCategoryArr(arr)
                    
            })
    
    
        },[])



    return(
    <>
           <main className="main-shopping">
            <h2 style={{display: `${productsFilterArr && productsFilterArr.length === 0?'none':'block'}`}}>Todos os produtos</h2>
            <div className="sob-main-container">
                <div className="shopping-section-mobile">
                    <button onClick={()=>setCategoryOpen(true)}><i className="ri-contract-right-line"></i></button>
                </div>
                <aside className={`shopping-aside ${categoryOpen? 'active-category':''}`}>
                    <h2>Category</h2>
                    <button onClick={()=>setCategoryOpen(false)}><i class="ri-close-line"></i></button>
                    <div className={`aside-category ${categoryOpen? 'active-category':''}`}>
                        <button onClick={()=>{setProductsFilterArr(productsArr.products); setCategoryOpen(false)}}>
                            All <i className="ri-arrow-go-back-fill"></i>
                        </button>
                        {categoryArr && categoryArr.map(el=>{
                            return (
                                <button key={el} onClick={()=>{
                                    setProductsFilterArr(productsArr.products.filter(item=>item.category === el));
                                    setCategoryOpen(false)
                                    
                                }}>
                                    {el}
                                </button>
                            )
                        })}
                    </div>
                    <h3>Filter by</h3>
                    <div className="aside-price">
                        <button onClick={()=>setPriceOpen(!priceOpen)}><p>price</p> <i class={`${priceOpen?' ri-arrow-drop-up-line':'ri-arrow-drop-down-line'}`}></i></button>
                        <div className={`aside-price-content ${priceOpen? 'open':''}`}>
                            <div className="filter-price-item">
                                <button className={`${(check===1)?'checked':''}`} onClick={()=>{
                                    setProductsFilterArr(productsArr.products.filter(el=>el.price < 10))
                                    if(check === 1){
                                        setCheck(0)
                                        setProductsFilterArr(productsArr.products)

                                    }else{
                                        setCheck(1)
                                    }
                                }}></button>
                                <p>Under $10</p>
                            </div>
                            <div className="filter-price-item">
                                <button className={`${(check===2)?'checked':''}`} onClick={()=>{
                                    setCheck(2)
                                    setProductsFilterArr(productsArr.products.filter(el=>el.price > 10 && el.price < 30 ))
                                    if(check === 2){
                                        setCheck(0)
                                        setProductsFilterArr(productsArr.products)
                                    }else{
                                        setCheck(2)
                                    }
                                }}></button>
                                <p>$10 - 30$</p>
                            </div>
                            <div className="filter-price-item">
                                <button className={`${(check===3)?'checked':''}`} onClick={()=>{
                                    setProductsFilterArr(productsArr.products.filter(el=>el.price > 30 && el.price < 100 ))
                                    if(check === 3){
                                        setCheck(0)
                                        setProductsFilterArr(productsArr.products)

                                    }else{
                                        setCheck(3)
                                    }
                                }}></button>
                                <p>$30 - $100</p>
                            </div>
                            <div className="filter-price-item">
                                <button className={`${(check===4)?'checked':''}`} onClick={()=>{
                                    setProductsFilterArr(productsArr.products.filter(el=>el.price > 100 ))
                                    if(check === 4){
                                        setCheck(0)
                                        setProductsFilterArr(productsArr.products)

                                    }else{
                                        setCheck(4)
                                    }
                                }}></button>
                                <p>Over $100</p>
                            </div>
                        </div>
                    </div>
                </aside>
                <section className="shopping-section">
                    <h3 style={{display: `${productsFilterArr && productsFilterArr.length === 0?'block':'none'}`}}>Produto não encontrado</h3>
                    {productsFilterArr && productsFilterArr.map(el=>{
                        return(
                            <div onClick={()=>{setProductSelected(el);setPopupOpen(true)}} key={el.id} className="section-items">
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
                </section>
            </div>
        </main>

        <div onClick={()=>setCategoryOpen(false)} className={`category-bg-blur ${categoryOpen? 'active-bg':''}`}></div>
    </>
    )
}