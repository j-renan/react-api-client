import UserCardComponent from "./UserCardComponent";

function UserListComponent({ usuarios, onSelecionarUsuario, onSelecionarUsuarioExcluir }) {
    return (
        <ul className="lista-usuarios">

            {usuarios.map((usuario) => (
                <UserCardComponent
                    key={usuario.id}
                    usuario={usuario}
                    onSelecionarUsuario={onSelecionarUsuario}
                    onSelecionarUsuarioExcluir={onSelecionarUsuarioExcluir}
                />
            ))}

        </ul>
    );
}

export default UserListComponent;