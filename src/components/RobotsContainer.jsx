import imgRembot from '../assets/images/Robots/REMBOT.jpg'
import imgBallbot from '../assets/images/Robots/Ballbot.jpg'
import imgEsferico from '../assets/images/Robots/Esferico.jpg'
import imgSepiente from '../assets/images/Robots/serpiente.jpg'
import imgSubacuatico from '../assets/images/Robots/SubacuaticoCompleto.jpg'
import imgFinder from '../assets/images/Robots/V3.jpg'

import { Robots } from "./Robots"

export const RobotsContainer = () => {
    return (
        <section className="mt-6 sm:flex sm:flex-wrap bg-AzulClaro gap-8 pt-10   pb-10 justify-center ">
            <Robots
                img={imgRembot}
                año='2023'
                nombre='RemBot'
                texto='El rembot es...........................................................................'
            />

            <Robots
                img={imgSepiente}
                año='2023'
                nombre='Robot Serpiente'
                texto='El rembot es...' />

            <Robots
                img={imgBallbot}
                año='2023'
                nombre='Ballbot'
                texto='El rembot es...' />

            <Robots img={imgEsferico}
                año='2023'
                nombre='Robot Esferico'
                texto='El rembot es...' />

            <Robots img={imgSubacuatico}
                año='2023'
                nombre='Robot Subacuático'
                texto='El rembot es...' />

            <Robots img={imgFinder}
                año='2023'
                nombre='Finder V3'
                texto='El rembot es...' />

      


        </section>

    )
}
