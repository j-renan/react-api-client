function UserCard({ usuario, onSelecionarUsuario }) {
    return (
        <li className="user-card">
            <div className="user-card__identity">
                <span className="user-card__avatar" aria-hidden="true">
                    {usuario.name.charAt(0)}
                </span>
                <div>
                    <strong>{usuario.name}</strong>
                    <span className="user-card__handle">@{usuario.username}</span>
                </div>
            </div>
            <button className="action-button"
                onClick={() => {
                    onSelecionarUsuario(usuario.id);
                }}>
                Ver detalhes
            </button>
        </li>
    );
}

export default UserCard;

