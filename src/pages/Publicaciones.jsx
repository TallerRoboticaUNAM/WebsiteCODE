import { Header } from "../components/Header";
import { CardCarousel } from "../components/CardCarousel";
import { CarouselPublicaciones } from "../components/CarouselPublicaciones";
export const Publicaciones = () => {
    return (
        <main className="px-4 pt-6">
            <Header />
            <div className="bg-AzulOscuro">

                <CardCarousel />
            </div>

            <div className=" bg-AzulClaro">

                <CarouselPublicaciones/>
            </div>


        </main>
    );
};
