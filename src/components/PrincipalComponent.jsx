import imageMobile from '../assets/images/FotoPrincipal.png'
import imageDesktop from '../assets/images/FotoPrincipalMobil.png'



export const PrincipalComponent = () => {
    return (
        <section className='mb-12'>
            <picture>
                <source media="(max-width:340px)" srcSet={imageMobile} />
                <source media="(max-width:641px)" srcSet={imageDesktop} />
                <img src={imageMobile} alt="Articulo principal imagen " />
            </picture>

            <div className='sm:flex'>
                <div className='flex-1 py-6'>
                    <h2 className='text-[40px] text-AzulOscuro font-bold sm:text-[58px] leading-none'>
                        ¿Quieres formar parte de TRA?</h2></div>
                <div className='flex-1 pt-9'>
                    <p className='text-[13px] mb-10  sm:text-[15px]  text-justify ' >
                        En el Taller de Robótica Abierta se desarrollan diversos proyectos de robótica
                        empleando Linux, Python, ROS, Arduino y aplicando conocimientos de
                        control, electrónica, programación, diseño y manufactura que se adquieren
                        en la Facultad de Ingeniería de la UNAM.</p>
                    <button className='bg-AzulClaro w-[185px] h-[48px] uppercase text-Blanco hover:bg-AzulOscuro '>Únete</button>
                </div>
            </div>



        </section>
    )
}
