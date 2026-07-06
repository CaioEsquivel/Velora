import './LandingList.css'
import { useNavigate } from 'react-router-dom'


export const LandingList = ()=>{
    const navegate = useNavigate()

    return(
        <section className="category-list-container">
            <div className="category-list">
                <i className="ri-computer-line"></i>
                <p>Eletrônicos</p>
            </div>
            <div className="category-list">
                <i className="ri-home-9-line"></i>
                <p>Casa e Decoração</p>
            </div>
            <div className="category-list">
                <i className="ri-t-shirt-line"></i>
                <p>Moda</p>
            </div>
            <div className="category-list">
                <i className="ri-weight-fill"></i>
                <p>Esportes</p>
            </div>
            <div className="category-list">
                <i className="ri-bear-smile-fill"></i>
                <p>Brinquedos</p>
            </div>
            <div className="category-list">
                <i className="ri-book-3-line"></i>
                <p>Livros</p>
            </div>
            <div className="category-list">
                <i className="ri-car-line"></i>
                <p>Automotivo</p>
            </div>
            <div className="category-list">
                <i className="ri-flower-line"></i>
                <p>Jardim</p>
            </div>
            <div onClick={()=>navegate('/Shopping')} className="category-list-end">
                <i className="ri-arrow-right-s-line"></i>
                <p>Ver Todas</p>
            </div>
        </section>
    )
}