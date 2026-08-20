import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import UserList from "./components/UserList";
import Header from "./components/Header";


function App() {
    const url = "https://jsonplaceholder.typicode.com";
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

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

    useEffect(() => {
        buscarUsuarios();
        buscarPosts();
    }, []);

    return (
        <div>
            <Header titulo="Catálogo de Usuários" />

            {carregando && (
                <Loading />
            )}

            {erro && (
                <ErrorMessage
                    mensagem={erro}
                />
            )}

            {!carregando && !erro && (
                <UserList
                    usuarios={usuarios}
                />
            )}
        </div>
    );
}

export default App;