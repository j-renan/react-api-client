import { useState } from "react";

function UserFormComponent({ onCadastrar }){
    const [nome, setNome] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")

    function handleSubmit(evento) {
        evento.preventDefault()
        const novoUsuario = {
            name: nome,
            username: username,
            email: email,
            phone: telefone
        }

        onCadastrar(novoUsuario)
        limparFormulario()
    }

    function limparFormulario() {
        setNome("")
        setUsername("")
        setEmail("")
        setTelefone("")
    }

    return (
        <form className="formulario-usuario" onSubmit={handleSubmit}>
            <header className="formulario-usuario__cabecalho">
                <p>Cadastro</p>
                <h2>Novo usuário</h2>
            </header>

            <div className="campo-formulario">
                <label htmlFor="novo-usuario-nome">Nome</label>
                <input id="novo-usuario-nome" type="text"
                autoComplete="name"
                value={nome}
                onChange={(evento) => {
                    setNome(evento.target.value)
                }}
                />
            </div>

            <div className="campo-formulario">
                <label htmlFor="novo-usuario-username">Usuário</label>
                <input id="novo-usuario-username" type="text"
                autoComplete="username"
                value={username}
                onChange={(evento) => {
                    setUsername(evento.target.value)
                }}
                />
            </div>

            <div className="campo-formulario">
                <label htmlFor="novo-usuario-email">E-mail</label>
                <input id="novo-usuario-email" type="email"
                autoComplete="email"
                value={email}
                onChange={(evento) => {
                    setEmail(evento.target.value)
                }}
                />
            </div>

            <div className="campo-formulario">
                <label htmlFor="novo-usuario-telefone">Telefone</label>
                <input id="novo-usuario-telefone" type="tel"
                autoComplete="tel"
                value={telefone}
                onChange={(evento) => {
                    setTelefone(evento.target.value)
                }}
                />
            </div>

            <button className="botao-cadastrar" type="submit">Cadastrar</button>
        </form>
    )
}

export default UserFormComponent