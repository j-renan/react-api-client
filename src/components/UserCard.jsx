function UserCard({ usuario, onSelecionarUsuario }) {
    return (
        <li>
            <strong>{usuario.name}</strong>
            <br />
            Usuário: {usuario.username}
            <br />
            E-mail: {usuario.email}
            <br />
            Telefone: {usuario.phone}
            <br />
            Cidade: {usuario.address.city}
            <br />
            Website: {usuario.website}
            <br />
            <button
                onClick={() => {
                    onSelecionarUsuario(usuario.id);
                }}>
                Ver detalhes
            </button>
        </li>
    );
}

export default UserCard;

