import { NoticiasContainer } from './NoticiasContainer'
import imgFacebook from '../assets/images/Logos/facebook.png'
import imgYoutube from '../assets/images/Logos/youtube.png'

import React from 'react'

export const NewContainer = () => {
    return (
        <aside className="bg-AzulOscuro text-Blanco py-[18px] px-[20px] ">
            <h1 className="text-Blanco text-5xl font-bold">Novedades</h1>
            <NoticiasContainer
                title='Semana DIMEI'
                text='aa'
            />
            <NoticiasContainer
                title='RemBot'
                text='Puesta en marcha del robot'
            />
            <NoticiasContainer
                title='Robóts de búsqueda y rescate'
                text='cc'
            />
            <div className='pt-5'>
                <p className='font-bold text-[30px]'>¡Síguenos en nuestras redes sociales!</p>
                <div className='pt-5  w-[80px] gap-6 flex '>
                    <img  src={imgFacebook} alt="facebook" />
                    <img  src={imgYoutube} alt="youtube" />
                </div>


            </div>


        </aside>
    )
}
