import { Header } from "../components/Header/Header"
import './Shopping.css'
import { useEffect, useState } from "react"
import { ProductPopup } from "../components/ProductPopup/ProductPopup"
import { ShopMain } from "../components/ShopMain/ShopMain"
import { WarningPopup } from "../components/RemovePopup/WarningPopup"

export const Shopping=({loading, setLoading, popupOpen, setPopupOpen,searchValue,setSearchValue,warning,setWarning})=>{

    // const [productsArr, setProductsArr] = useState(null)
    const [productsFilterArr, setProductsFilterArr] = useState(null)
    const [productsArr, setProductsArr] = useState(null)
    const [titleWarning, setTitleWarning] = useState('')
    const [detailsWarning, setDetailsWarning] = useState('')





    // const [categoryArr, setCategoryArr] = useState(null)
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [productSelected,setProductSelected ] = useState(null)
    

    

    return(
    <>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} loading={loading} setLoading={setLoading} productsFilterArr={productsFilterArr} setProductsFilterArr={setProductsFilterArr} productsArr={productsArr} setProductsArr={setProductsArr} warning={warning} setWarning={setWarning} setDetailsWarning={setDetailsWarning} setTitleWarning={setTitleWarning} />

        <ShopMain categoryOpen={categoryOpen} setCategoryOpen={setCategoryOpen} popupOpen={popupOpen} setProductSelected={setProductSelected} setPopupOpen={setPopupOpen} productsFilterArr={productsFilterArr} setProductsFilterArr={setProductsFilterArr} productsArr={productsArr} setProductsArr={setProductsArr} searchValue={searchValue} setSearchValue={setSearchValue} />


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



        <ProductPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} item={productSelected} setDetailsWarning={setDetailsWarning} setTitleWarning={setTitleWarning} setWarning={setWarning}/>

        
        <WarningPopup titleWarning={titleWarning} detailsWarning={detailsWarning} warning={warning} />

    </>
    )
}