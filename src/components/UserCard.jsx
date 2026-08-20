function UserCard({ usuario }) {
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
        </li>
    );
}

export default UserCard;

