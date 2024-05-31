import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";


function Home() {
    return (
        <>
            <div className='bg-indigo-900 flex justify-center'>
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4"
                    >
                        <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
                        <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                    </div>
                    </div>
                    

                    <div className="flex flex-col justify-center">
                        <img src="https://i.imgur.com/VpwApCU.png"
                            alt="Imagem da página home" className="w-2/3" />
                    </div>
                    
                </div>
            </div>
            <ListaPostagens />
        </>
    )
}

export default Home;


