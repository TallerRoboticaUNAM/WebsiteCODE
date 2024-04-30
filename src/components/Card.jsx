export const Card = ({ imgart, textart, externalLink }) => {
    return (
        <div className="flex justify-center pt-10 pb-10 pl-10">
            <div className="rounded-lg w-[250px] overflow-hidden bg-Blanco">
                <div>
                    <img src={imgart} alt="tesis" className="w-[max] h-[300px]" />
                </div>
                <div className="flex justify-center pb-4">
                    <a href={externalLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-AzulClaro rounded-lg w-[185px] h-[48px] uppercase text-Blanco hover:bg-AzulOscuro">
                            {textart}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
