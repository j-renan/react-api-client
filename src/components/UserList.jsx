import UserCard from "./UserCard";

function UserList({ usuarios, onSelecionarUsuario }) {
    return (
        <ul className="user-list">
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