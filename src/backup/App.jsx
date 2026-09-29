import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import UserList from "./components/UserList";
import Header from "./components/Header";
import UserDetails from "./components/UserDetails";
import UserForm from "./components/UserForm";
import NovoUsuario from "./components/NovoUsuario";
import SuccessMessage from "./components/SuccessMessage";


const filtrarUsuarioPorTermo = (termo) => (usuario) => {
    const termoLower = termo.toLowerCase();

    return (
        usuario.name.toLowerCase().includes(termoLower) ||
        usuario.username.toLowerCase().includes(termoLower) ||
        usuario.email.toLowerCase().includes(termoLower) 
    );
};


function App() {
    const url = "https://jsonplaceholder.typicode.com";
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const [busca, setBusca] = useState("");
    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
    const [mensagem, setMensagem] = useState(null);
    const [novoUsuario, setNovoUsuario] = useState(null);

    const usuariosFiltrados = usuarios.filter(filtrarUsuarioPorTermo(busca));

    async function buscarUsuario(id) {
        console.log("buscando usuário com id:", id);
        try {
            const response = await axios.get(
                `${url}/users/${id}`
            );
            const data = response.data;
            setUsuarioSelecionado(data);
            console.log("dados usuario:", data);
        } catch (error) {
            console.error(
                "Erro ao buscar usuário:",
                error
            );
        }
    }

    async function buscarUsuarios() {
        try {
            setCarregando(true);
            const response = await axios.get(
                `${url}/users`
            );
            const data = response.data;
            setUsuarios(data);
        } catch (error) {
            console.log(
                "Erro ao buscar usuários:",
                error
            );            
            setErro(
                `Não foi possível carregar os usuários. Código: ${error.message}`
            );
            setUsuarios([]);
        } finally {
            setCarregando(false);
        }
    }

    async function buscarPosts() {
        try {
            const response = await axios.get(
                `${url}/posts`
            );
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.log(
                "Erro ao buscar posts:",
                error
            );
        }
    }

    function limparDetalhesUsuario() {
        setUsuarioSelecionado(null);
    }    

    async function cadastrarUsuario(usuario) {
        try {
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/users",
                usuario
            );
            const data = response.data;
            setNovoUsuario(data);
            setMensagem(`Usuário ${data.name} cadastrado com sucesso!`);
            console.log("Usuário cadastrado:", data);
        } catch (error) {
            console.error(
                "Erro ao cadastrar usuário:",
                error
            );
        }
    }

    useEffect(() => {
        buscarUsuarios();
        buscarPosts();
    }, []);

    return (
        <main className="app-shell">
            <Header titulo="Catálogo de Usuários" />

            <div className="search-bar">
                <input
                    type="search"
                    aria-label="Buscar usuário"
                    placeholder="Buscar por nome, usuário ou e-mail..."
                    onChange={(evento) => {
                        setBusca(evento.target.value);
                    }}
                />
            </div>

            {carregando && <Loading />}

            {erro && <ErrorMessage mensagem={erro} />}

            {!carregando && !erro && (                
                <div className="content-grid">
                    <section className="content-column" aria-labelledby="users-heading">
                        <div className="section-heading">
                            <h2 id="users-heading">Pessoas</h2>
                            <p className="result-count">
                                {usuariosFiltrados.length} usuário(s) encontrado(s)
                            </p>
                        </div>

                        {usuariosFiltrados.length > 0 ? (
                            <UserList
                                usuarios={usuariosFiltrados}
                                onSelecionarUsuario={buscarUsuario}
                            />
                        ) : (
                            <p className="empty-state">Nenhum usuário encontrado.</p>
                        )}
                    </section>

                    {usuarioSelecionado && (
                        <UserDetails
                            usuario={usuarioSelecionado}
                            onFecharDetalhes={limparDetalhesUsuario}
                        />
                    )}

                    <UserForm onCadastrar={cadastrarUsuario} />

                    {mensagem && (
                        <SuccessMessage mensagem={mensagem} />
                    )}

                    {novoUsuario && (
                        <NovoUsuario novoUsuario={novoUsuario} />
                    )}
                </div>
            )}
        </main>
    );
}

export default App;