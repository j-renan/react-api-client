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
                onClick={() => {
                    onSelecionarUsuario(usuario.id)
                }}
            >Ver detalhes</button>

            <button onClick={() => onSelecionarUsuarioExcluir(usuario.id)}>
                Excluir
            </button>

        </li>
    );
}

export default UserCardComponent;