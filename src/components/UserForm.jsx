import { useState } from "react";

function UserForm({ onCadastrar }) {
    const [nome, setNome] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    function handleSubmit(evento) {
        evento.preventDefault();
        const novoUsuario = {
            name: nome,
            username: username,
            email: email,
            phone: telefone,
        };
        onCadastrar(novoUsuario);
        limparFormulario();
    }

    function limparFormulario() {
        setNome("");
        setUsername("");
        setEmail("");
        setTelefone("");
    }

    return (
        <section className="panel form-panel" aria-labelledby="form-heading">
            <div className="form-heading">
                <div>
                    <h2 id="form-heading">Adicionar usuário</h2>
                    <p>Registre uma nova pessoa no diretório.</p>
                </div>
            </div>
            <form className="user-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="nome">Nome</label>
                    <input id="nome"
                type="text"
                value={nome}
                onChange={(evento) => {
                    setNome(evento.target.value);
                }}
                    />
                </div>

                <div className="field">
                    <label htmlFor="username">Usuário</label>
                    <input id="username"
                type="text"
                value={username}
                onChange={(evento) => {
                    setUsername(evento.target.value);
                }}
                    />
                </div>

                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input id="email"
                type="email"
                value={email}
                onChange={(evento) => {
                    setEmail(evento.target.value);
                }}
                    />
                </div>

                <div className="field">
                    <label htmlFor="telefone">Telefone</label>
                    <input id="telefone"
                type="text"
                value={telefone}
                onChange={(evento) => {
                    setTelefone(evento.target.value);
                }}
                    />
                </div>

                <button className="submit-button" type="submit">Cadastrar</button>
            </form>
        </section>
    );
}

export default UserForm;