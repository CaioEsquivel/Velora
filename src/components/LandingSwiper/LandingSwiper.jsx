import './LandingSwiper.css'
import sofa from '../../assets/sofa.jpg'
import bicicleta from '../../assets/bicicleta.jpg'
import technology from '../../assets/technology.jpg'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade,
} from "swiper/modules";

export const LandingSwiper = ()=>{
    return(
        <section className='slide-container'>
            <Swiper className="hero-slider"
            modules={[
                Navigation,
                Pagination,
                Autoplay,
                EffectFade,
            ]}
            effect="fade"
            fadeEffect={{
                crossFade:true
            }}
            slidesPerView={1}

            loop

            navigation

            pagination={{
                clickable: true,
            }}

            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}

            speed={700}>

                <SwiperSlide>
                    <div className="slide-element-sofa">

                        <img className="slide-img" src={sofa} alt="" />

                        <div className="slide-text">
                            <h2>Tudo que você <br /> precisa, em um só lugar.</h2>
                            <p>Produtos incríveis para facilitar o seu dia a dia com os melhores preços.</p>
                            <a href="#">Comprar agora</a>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-element-bike">

                        <img className="slide-img" src={bicicleta} alt="" />

                        <div className="slide-text">
                            <h2>Performance que <br /> te acompanha.</h2>
                            <p>Bicicletas, acessórios e equipamentos para todos os seus desafios.</p>
                            <a href="#">Explorar agora</a>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-element-tech">

                        <img className="slide-img" src={technology} alt="" />

                        <div className="slide-text">
                            <h2>Tecnologia que <br />simplifica sua vida</h2>
                            <p>Os melhores eletrônicos e acessórios com as últimas novidades do mercado.</p>
                            <a href="#">Conhecer novidades</a>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}