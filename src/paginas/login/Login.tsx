import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';

function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if(usuario.token !== ''){
            navigate("/home")
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        handleLogin(usuarioLogin)
    }

    console.log(JSON.stringify(usuarioLogin))

    return (
        <>
            <div className="fundoLogin hidden lg:block">
                <div className="flex justify-center align-center h-screen mx-auto   place-items-center w-2/5">
                <div className='backdrop-blur-lg  w-4/5 border-2 h-auto border-[#ffffff33] rounded-lg'>
                <form className="flex justify-center items-center mx-4 my-8 align-center flex-col gap-4" 
                    onSubmit={login}
                >
                    <h2 className="text-white text-4xl my-4">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className=" rounded p-2 formlogin placeholder:text-[#e6e0e0]"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="rounded p-2 formlogin placeholder:text-[#e6e0e0]"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        type='submit'
                        className="rounded bg-[#235F47] hover:bg-[#164736] flex justify-center
                         text-white w-1/2 py-2">

                        {isLoading ?

                            <RotatingLines
                                strokeColor='white'
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                            :
                            <span >Entrar</span>
                        }
                        
                    </button>
                    <p className='text-white'>
                        Ainda não tem uma conta?{' '}
                    </p>
                    <Link to='/cadastro' className="text-white   font-bold hover:underline">
                            Cadastre-se
                    </Link>
                </form>
                    </div>
                    </div>
            </div>
        </>
    );
}

export default Login;