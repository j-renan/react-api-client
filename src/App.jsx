import { useEffect, useState } from "react";


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
            <h1>Catálogo de Usuários</h1>

            {carregando && (
                <p>Carregando usuários...</p>
            )}

            <p>
                Usuários encontrados: {usuarios.length}
            </p>

            {erro && (
                <p>{erro}</p>
            )}
            {!carregando && !erro && (
                <ul>                
                    {usuarios.map(usuario => (
                            <li key={usuario.id}>
                                <hr />
                                <strong>{usuario.name}</strong>
                                <br /><br />
                                Usuário: {usuario.username}
                                <br />
                                E-mail: {usuario.email}
                                <br />
                                Telefone: {usuario.phone}
                                <br />
                                Cidade: {usuario.address.city}
                            </li>
                        )
                    )}
                </ul>
            )}
        </div>
    );
}

export default App;