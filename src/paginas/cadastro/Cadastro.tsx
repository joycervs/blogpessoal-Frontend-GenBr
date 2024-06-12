import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './Cadastro.css'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { ToastAlerta } from '../../utils/ToastAlerta';

function Cadastro() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [confirmaSenha, setConfirmaSenha] = useState<string>('')

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    });

    useEffect(() => {
        if (usuario.id !== 0){
        retornar();
        }
    }, [usuario]);

    function retornar(){
        navigate('/login')
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
        })
    }

    function handleConfirmaSenha(e: ChangeEvent<HTMLInputElement>){
        setConfirmaSenha(e.target.value);
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){
            setIsLoading(true)

        try{
            await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
            ToastAlerta('Usuário cadastrado com sucesso!','sucesso');

        }catch(error){
            ToastAlerta('Erro ao cadastrar o usuário!','erro')
        }

        }else{
        ToastAlerta('Dados estão inconsistentes! Verifique os dados do usuário.','erro');
        setUsuario({...usuario, senha: ''});
        setConfirmaSenha('');
        }

        setIsLoading(false)
    }

    return (
        <>
            <div className="fundoCadastro hidden lg:block">
                <div className="flex justify-center text-white align-center h-screen mx-auto   place-items-center w-2/5">
                <div className='backdrop-blur-lg  w-4/5 border-2 h-auto border-[#ffffff33] rounded-lg'>
                <form className='flex justify-center items-center mx-4 my-8 align-center flex-col gap-4' 
                    onSubmit={cadastrarNovoUsuario}
                >
                <h2 className='text-white text-4xl'>Cadastrar</h2>
                <div className="flex flex-col w-full">
                    <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    className="rounded p-2 formcadastro placeholder:text-[#e6e0e0]"
                    value={usuario.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full text-white">
                    <input
                    type="text"
                    id="usuario"
                    name="usuario"
                    placeholder="Usuário"
                    className="rounded p-2 formcadastro placeholder:text-[#e6e0e0]"
                    value={usuario.usuario}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <input
                    type="text"
                    id="foto"
                    name="foto"
                    placeholder="Foto"
                    className="rounded p-2 formcadastro placeholder:text-[#e6e0e0]"
                    value={usuario.foto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    className="rounded p-2 bg-inherit formcadastro placeholder:text-[#e6e0e0]"
                    value={usuario.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    placeholder="Confirmar Senha"
                    className="rounded p-2 bg-inherit formcadastro placeholder:text-[#e6e0e0]"
                    value={confirmaSenha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmaSenha(e)}
                    />
                </div>
                <div className="flex justify-around w-full gap-8">
                    <button className='rounded text-white bg-[#AA81A3] 
                        hover:bg-[#97478a] w-1/2 py-2' 
                        onClick={retornar}
                        >
                    Cancelar
                    </button>
                    <button
                        type='submit'
                        className='rounded text-white bg-[#235F47] hover:bg-[#164736] w-1/2 py-2
                            flex justify-center'
                    >
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>Cadastrar</span>
                    }
                    </button>
                </div>
                        </form>
                        </div>
                </div>
                </div>
        </>
    )
    }

export default Cadastro