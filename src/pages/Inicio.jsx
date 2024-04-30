

import { Header } from '../components/Header'
import { PrincipalComponent } from '../components/PrincipalComponent'
import { NewContainer } from '../components/NewContainer'
import { RobotsContainer } from '../components/RobotsContainer'


export const Inicio = () => {
  return (
    <main className="px-4 pt-6 bg-Blanco">
    <Header/>
    <div className='sm:flex sm:gap-8'>
      <PrincipalComponent />
      <NewContainer/>
    </div>
    <RobotsContainer />

  </main>
  )
}

