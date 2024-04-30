import { Card } from "./Card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import imgart1 from '../assets/images/Publicaciones/art1.png';
import imgart2 from '../assets/images/Publicaciones/art2.png';
import imgart3 from '../assets/images/Publicaciones/art3.png';
import imgart4 from '../assets/images/Publicaciones/art4.png';
import imgart5 from '../assets/images/Publicaciones/art5.png';
import imgart6 from '../assets/images/Publicaciones/art6.png';



export const CarouselPublicaciones = () => {
    return (
        <Swiper
            modules={[Navigation]} // Módulo de navegación
            navigation // Habilita flechas de navegación
            loop // Permite bucle para navegación continua
            slidesPerView={3}

            className="my-swiper pl-5 pr-20" // Clase para personalizar Swiper

        >
            <SwiperSlide>
                <Card imgart={imgart1}
                    textart={'VER PUBLICACIÓN'}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card imgart={imgart2}
                    textart={'VER PUBLICACIÓN'} />
            </SwiperSlide>
            <SwiperSlide>
                <Card imgart={imgart3}
                    textart={'VER PUBLICACIÓN'} />
            </SwiperSlide>
            <SwiperSlide>
                <Card imgart={imgart4}
                    textart={'VER PUBLICACIÓN'} />
            </SwiperSlide>
            <SwiperSlide>
                <Card imgart={imgart5}
                    textart={'VER PUBLICACIÓN'} />
            </SwiperSlide>
            <SwiperSlide>
                <Card imgart={imgart6}
                    textart={'VER PUBLICACIÓN'} />
            </SwiperSlide>

        </Swiper>
    )
}
