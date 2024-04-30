import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import imgtesisCesar from '../assets/images/Publicaciones/César.png';
import imgtesisGabo from '../assets/images/Publicaciones/Gabo.png';
import imgtesisGera from '../assets/images/Publicaciones/Gera.png';
import imgtesisJacob from '../assets/images/Publicaciones/Jacob.png';
import imgtesisMauro from '../assets/images/Publicaciones/Mauro.png';
import imgtesisPeps from '../assets/images/Publicaciones/Peps.png';
import imgtesisSergio from '../assets/images/Publicaciones/Sergio.png';
import imgtesisYukitoshi from '../assets/images/Publicaciones/Yukitoshi.png';

import { Card } from './Card';

export const CardCarousel = () => {
    return (
        <Swiper
            modules={[Navigation]} // Módulo de navegación
            navigation // Habilita flechas de navegación
            loop // Permite bucle para navegación continua
            slidesPerView={3}

            className="my-swiper pl-5 pr-20" // Clase para personalizar Swiper

        >
            <SwiperSlide>
                <Card imgart={imgtesisCesar}
                    textart={'VER TESIS'}
                    externalLink={"https://drive.google.com/file/d/1dI9lVT_swXkoTKQz55VHpJ7k8tvikBUr/view"} />
            </SwiperSlide>
            <SwiperSlide>
                <Card imgart={imgtesisGabo}
                    textart={'VER TESIS'}
                    externalLink={'https://drive.google.com/file/d/1dI9lVT_swXkoTKQz55VHpJ7k8tvikBUr/view'} />
            </SwiperSlide>
            <SwiperSlide>
                <Card imgart={imgtesisGera}
                    textart={'VER TESIS'} />
            </SwiperSlide>
            <SwiperSlide>
                <Card imgart={imgtesisJacob}
                    textart={'VER TESIS'} />
            </SwiperSlide>
            <SwiperSlide>
                <Card imgart={imgtesisMauro}
                    textart={'VER TESIS'} />
            </SwiperSlide>
            <SwiperSlide>
                <Card imgart={imgtesisPeps}
                    textart={'VER TESIS'} />
            </SwiperSlide>
            <SwiperSlide>
                <Card imgart={imgtesisSergio}
                    textart={'VER TESIS'} />
            </SwiperSlide>
            <SwiperSlide>
                <Card imgart={imgtesisYukitoshi}
                    textart={'VER TESIS'} />
            </SwiperSlide>
        </Swiper>
    );
};
