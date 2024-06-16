import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext'
import FormTema from './components/temas/formtemas/FormTema';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import DeletarTema from './components/temas/deletartema/DeletarTemas';
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens'
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem';
import FormPostagem from './components/postagens/formpostagem/FormPostagem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Perfil from './paginas/perfil/Perfil';


function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer/>
        <BrowserRouter>
            <Navbar />
            <div className='min-h-[80vh]'>
            <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/perfil" element={<Perfil />}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/temas" element={<ListaTemas />} />
                    <Route path="/cadastrartema" element={<FormTema />} />
                    <Route path="/editartema/:id" element={<FormTema />} />
                  <Route path="/deletartema/:id" element={<DeletarTema />} />
                  <Route path="/postagens" element={<ListaPostagens />} />
                  <Route path="/cadastrarpostagem" element={<FormPostagem />} />
                  <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
                  </Routes>
            </div>
            <Footer />
          </BrowserRouter>
      </AuthProvider>
      </>
  );
}

export default App;