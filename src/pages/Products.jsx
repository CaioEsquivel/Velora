import { Logo } from "../components/Logo/Logo"
import { Header } from "../components/Header/Header"
import { LandingSwiper } from "../components/LandingSwiper/LandingSwiper"
import { LandingList } from "../components/LandingList/LandingList"
import { LandingHotProducts } from "../components/LandingHotProducts/LandingHotProducts"
import { Footer } from "../components/Footer/Footer"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


import './Products.css'
import { WarningPopup } from "../components/RemovePopup/WarningPopup"

export const Products = ({loading, setLoading,popupOpen,setPopupOpen,searchValue,setSearchValue, warning, setWarning})=>{
    const [productItems, SetProductItems] = useState([])
    const [productID, setProductID] = useState(0)
    const [titleWarning, setTitleWarning] = useState('')
    const [detailsWarning, setDetailsWarning] = useState('')
    

    const navigate = useNavigate();

    return(
        <>
            <Header loading={loading} setLoading={setLoading} searchValue={searchValue} setSearchValue={setSearchValue} warning={warning} setWarning={setWarning} setTitleWarning={setTitleWarning} setDetailsWarning={setDetailsWarning} />

            <LandingSwiper />

            <LandingList/>

            <LandingHotProducts setPopupOpen={setPopupOpen} popupOpen={popupOpen} setDetailsWarning={setDetailsWarning} setTitleWarning={setTitleWarning} setWarning={setWarning} />

            <Footer/>

            <WarningPopup titleWarning={titleWarning} detailsWarning={detailsWarning} warning={warning} />
            
        </>
    )
}