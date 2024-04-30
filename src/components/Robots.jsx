
export const Robots = ({img,año,texto,nombre}) => {
  return (
    <article className='flex rounded-lg bg-Blanco h-[182px] pt-0 pl-0 w-[550px]'>

        <div className='w-[200px] flex-none'>
            <img className="w-full h-full object-cover rounded-lg" src={img} alt="Robot"  />
        </div>

        <div className=' flex-grow pl-6'>
            <p className='text-AzulClaro p-2 text-1xl mb-[18px] font-bold'>{año}</p>
            <h2 className='font-bold  text-[20px] mb-[5px] text-AzulOscuro'>{nombre}</h2>
            <p className=" pr-4 w-[200px] sm:w-[300px] items-center">{texto}</p>
        </div>  
    </article>

  )
}

