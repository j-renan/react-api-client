function FormUsuarioComponent({ usuario, textHeader, textTitle, setNome, setUsername, setEmail, setTelefone, handleSubmit }) {

    return (
        <form className="formulario-usuario" onSubmit={handleSubmit}>
            <header className="formulario-usuario__cabecalho">
                <p>{textHeader}</p>
                <h2>{textTitle}</h2>
            </header>

            <div className="campo-formulario">
                <label htmlFor="novo-usuario-nome">Nome</label>
                <input id="novo-usuario-nome" type="text"
                autoComplete="name"
                value={usuario?.name || ""}
                onChange={(evento) => {
                    setNome(evento.target.value)
                }}
                />
            </div>

            <div className="campo-formulario">
                <label htmlFor="novo-usuario-username">Usuário</label>
                <input id="novo-usuario-username" type="text"
                autoComplete="username"
                value={usuario?.username || ""}
                onChange={(evento) => {
                    setUsername(evento.target.value)
                }}
                />
            </div>

            <div className="campo-formulario">
                <label htmlFor="novo-usuario-email">E-mail</label>
                <input id="novo-usuario-email" type="email"
                autoComplete="email"
                value={usuario?.email || ""}
                onChange={(evento) => {
                    setEmail(evento.target.value)
                }}
                />
            </div>

            <div className="campo-formulario">
                <label htmlFor="novo-usuario-telefone">Telefone</label>
                <input id="novo-usuario-telefone" type="tel"
                autoComplete="tel"
                value={usuario?.phone || ""}
                onChange={(evento) => {
                    setTelefone(evento.target.value)
                }}
                />
            </div>

            <button className="botao-cadastrar" type="submit">Salvar</button>
        </form>
    );      
}

export default FormUsuarioComponent;