function UserCardComponent({ usuario, onSelecionarUsuario, onSelecionarUsuarioExcluir }) {
    return (
        <li className="card-usuario">

            <div className="avatar">
                {usuario.name.charAt(0)}
            </div>

            <h2 className="nome-usuario">
                {usuario.name}
            </h2>

            <p className="username">
                @{usuario.username}
            </p>

            <p className="email">
                {usuario.email}
            </p>

            <button
                className="botao-detalhes"
                onClick={() => {
                    onSelecionarUsuario(usuario.id)
                }}
            >Ver detalhes</button>

            <button className="botao-excluir" onClick={() => onSelecionarUsuarioExcluir(usuario.id)}>
                Excluir
            </button>

        </li>
    );
}

export default UserCardComponent;