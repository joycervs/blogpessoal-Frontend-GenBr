import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout(){
      handleLogout()
      ToastAlerta('O usuário foi desconectado com sucesso!', "info")
      navigate('/login')
  }

  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
      <div className="container flex justify-between text-lg">
      <div className='text-2xl font-bold uppercase'>
        <Link to="/home">Blog Pessoal</Link></div>

        <div className='flex gap-10 font-bold'>
          <div className='hover:underline'><Link to='/postagens'>Postagens</Link></div>
          <div className='hover:underline'><Link to='/temas'>Temas</Link></div>
          <div className='hover:underline'><Link to='/cadastrartema'>Cadastrar tema</Link></div>
          <div className='hover:underline'><Link to={"/perfil"}>Perfil</Link></div>
          <div className='hover:underline'><Link to="" onClick={logout} >Sair</Link></div>
        </div>
      </div>
    </div>
    )
  }
 
  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar


