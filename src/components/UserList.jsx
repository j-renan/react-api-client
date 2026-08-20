import UserCard from "./UserCard";

function UserList({ usuarios }) {
    return (
        <ul>
            <p>Total de usuários: {usuarios.length}</p>
            {usuarios.map(usuario => (
                <UserCard
                    key={usuario.id}
                    usuario={usuario}
                />
            ))}
        </ul>
    );
}

export default UserList;