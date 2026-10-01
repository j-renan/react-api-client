import { useEffect, useState } from "react";
import axios from "axios";

import HeaderComponent from "./components/HeaderComponent";
import LoadingComponent from "./components/LoadingComponent";
import UserListComponent from "./components/UserListComponent";

import "./App.css";
import UserDetailsComponent from "./components/UserDetailsComponent";
import UserFormComponent from "./components/UserFormComponent";
import ModalComponent from "./components/ModalComponent";
import SuccessMessage from "./components/SuccessMessage";
import NovoUsuarioComponent from "./components/NovoUsuarioComponent";
import ExcluirUsusarioComponent from "./components/ExcluirUsuarioComponent";


const filtrarUsuarioPorTermo = (termo) => (usuario) => {
    const termoLower = termo.toLowerCase();
    console.log("Filtrando usuário: ", usuario, " com termo: ", termoLower);
    return (
        usuario.name.toLowerCase().includes(termoLower) ||
        usuario.username.toLowerCase().includes(termoLower) ||
        usuario.email.toLowerCase().includes(termoLower)
    );
};


function App() {
    const url = "https://jsonplaceholder.typicode.com";

    const [usuarios, setUsuarios] = useState([]);
    const [erro, setErro] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [busca, setBusca] = useState("");
    const [usuarioSelecionadoDetalhes, setUsuarioSelecionadoDetalhes] = useState(null)
    const [modalNovoUsuarioAberto, setModalNovoUsuarioAberto] = useState(false)
    const [mensagem, setMensagem] = useState(null);
    const [novoUsuario, setNovoUsuario] = useState(null);
    const [usuarioSelecionadoExcluir, setUsuarioSelecionadoExcluir] = useState(null);

    const usuariosFiltrados = usuarios
        .filter(filtrarUsuarioPorTermo(busca));

    async function selecionarUsuario(id) {
        const usuario = await buscarUsuario(id)
        setUsuarioSelecionadoDetalhes(usuario)
    }

    async function buscarUsuario(id) {
        try {
            const response = await axios.get(
                `${url}/users/${id}`
            )
            const data = response.data
            return data
        } catch (error) {
            console.log("Erro ao buscar usuário: ", error)
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
                "Erro ao buscar usuários: ",
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

    function limparDetalhesUsuario() {
        setUsuarioSelecionadoDetalhes(null)
    }

    async function cadastrarUsuario(usuario) {
        try {
            const response = await axios.post(
                `${url}/users`, usuario
            )
            const data = response.data
            setNovoUsuario(data)
            setUsuarios([...usuarios, data])
            setErro(null)
            setMensagem("Usuário cadastrado com sucesso!")
            setModalNovoUsuarioAberto(false)
        } catch (error) {
            console.log("Erro ao cadastrar usuário: ", error)
        }
    }

    async function selecionarUsuarioExcluir(id) {
        const usuario = await buscarUsuario(id)
        setUsuarioSelecionadoExcluir(usuario)
    }

    function cancelarExcluirUsuario() {
        setUsuarioSelecionadoExcluir(null)
    }

    async function excluirUsuario(id) {
        try {
            await axios.delete(`${url}/users/${id}`)
            setUsuarios(usuarios.filter((usuario) => usuario.id !== id))
            setUsuarioSelecionadoExcluir(null)
            setMensagem("Usuário excluído com sucesso!")
        } catch (error) {
            console.log("Erro ao excluir usuário: ", error)
        }
    }

    useEffect(() => {
        buscarUsuarios();
    }, []);

    useEffect(() => {
        if (!mensagem) {
            return undefined;
        }

        const timeoutId = setTimeout(() => {
            setMensagem(null);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [mensagem]);


    return (
        <div className="app">
            <HeaderComponent
                busca={busca}
                setBusca={setBusca}
            />
            <button
                className="botao-novo-usuario"
                type="button"
                onClick={() => setModalNovoUsuarioAberto(true)}
            >
                Novo Usuário
            </button>

            {carregando && (
                <LoadingComponent />
            )}

            <p className="informacao">
                Total de usuários: {usuarios.length}
            </p>

            {erro && (
                <p className="erro">
                    {erro}
                </p>
            )}


            {!carregando && !erro && (
                <>
                    {usuariosFiltrados.length > 0 ? (
                        <p className="informacao">
                            {usuariosFiltrados.length} usuário(s) encontrado(s)
                        </p>
                    ) : (<div></div>)}

                    {usuariosFiltrados.length > 0 ? (
                        <UserListComponent
                            usuarios={usuariosFiltrados}
                            onSelecionarUsuario={selecionarUsuario}
                            onSelecionarUsuarioExcluir={selecionarUsuarioExcluir}
                        />
                    ) : (
                        <p className="sem-resultados">
                            Nenhum usuário encontrado.
                        </p>
                    )}

                    {usuarioSelecionadoDetalhes && (
                        <ModalComponent onFechar={limparDetalhesUsuario}>
                            <UserDetailsComponent
                                usuario={usuarioSelecionadoDetalhes}
                                onFecharDetalhes={limparDetalhesUsuario}
                            />
                        </ModalComponent>                        
                    )}

                    {usuarioSelecionadoExcluir && (
                        <ModalComponent onFechar={cancelarExcluirUsuario}>
                            <ExcluirUsusarioComponent
                                usuario={usuarioSelecionadoExcluir}
                                onFecharDetalhes={cancelarExcluirUsuario}
                                onExcluirUsuario={excluirUsuario}
                            />
                        </ModalComponent>
                    )}

                    {novoUsuario && (
                        <NovoUsuarioComponent novoUsuario={novoUsuario} />
                    )}

                </>
            )}

            {modalNovoUsuarioAberto && (
                <ModalComponent
                    titulo="Novo usuário"
                    onFechar={() => setModalNovoUsuarioAberto(false)}
                >
                    <UserFormComponent onCadastrar={cadastrarUsuario} />
                </ModalComponent>
            )}

            {mensagem && <SuccessMessage mensagem={mensagem} />}
        </div>
    );
}

export default App;