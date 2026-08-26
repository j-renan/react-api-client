import UserCard from "./UserCard";

function UserList({ usuarios, onSelecionarUsuario }) {
    return (
        <ul>
            <p>Total de usuários: {usuarios.length}</p>
            {usuarios.map(usuario => (
                <UserCard
                    key={usuario.id}
                    usuario={usuario}
                    onSelecionarUsuario={onSelecionarUsuario}
                />
            ))}
        </ul>
    );
}

export default UserList;