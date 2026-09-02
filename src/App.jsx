import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import UserList from "./components/UserList";
import Header from "./components/Header";
import UserDetails from "./components/UserDetails";


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

    const usuariosFiltrados = usuarios.filter(filtrarUsuarioPorTermo(busca));

    async function buscarUsuario(id) {
        console.log("buscando usuário com id:", id);
        try {
            const response = await fetch(
                `${url}/users/${id}`
            );
            if (!response.ok) {
                throw new Error(
                    `Erro HTTP: ${response.status}`
                );
            }
            const data = await response.json();
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
            const response = await fetch(
                `${url}/users`
            );
            if (!response.ok) {
                throw new Error(
                    `Erro HTTP: ${response.status}`
                );
            }
            const data = await response.json();
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
            const response = await fetch(
                `${url}/posts`
            );
            if (!response.ok) {
                throw new Error(
                    `Erro HTTP: ${response.status}`
                );
            }
            const data = await response.json();
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

    useEffect(() => {
        buscarUsuarios();
        buscarPosts();
    }, []);

    return (
        <div>
            <Header titulo="Catálogo de Usuários" />

            <input
                type="text"
                placeholder="Buscar usuário..."
                    onChange={(evento) => {
                    setBusca(evento.target.value);
                }}
            />

            {carregando && (
                <Loading />
            )}

            {erro && (
                <ErrorMessage
                    mensagem={erro}
                />
            )}

            {!carregando && !erro && (                
                <>
                    <p>
                        {usuariosFiltrados.length} usuário(s) encontrado(s)
                    </p>

                    {usuariosFiltrados.length > 0 ? (
                        <UserList
                            usuarios={usuariosFiltrados}
                            onSelecionarUsuario={buscarUsuario}
                        />
                    ) : (
                        <p>
                            Nenhum usuário encontrado.
                        </p>
                    )}

                    {usuarioSelecionado && (
                        <UserDetails
                            usuario={usuarioSelecionado}
                            onFecharDetalhes={limparDetalhesUsuario}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default App;