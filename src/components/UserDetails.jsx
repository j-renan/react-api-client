function UserDetails({ usuario }) {

    return (
        <div>
            <h2>Detalhes do usuário</h2>

            <p>
                <strong>Nome:</strong>{" "}
                {usuario.name}
            </p>

            <p>
                <strong>Usuário:</strong>{" "}
                {usuario.username}
            </p>

            <p>
                <strong>E-mail:</strong>{" "}
                {usuario.email}
            </p>

            <p>
                <strong>Telefone:</strong>{" "}
                {usuario.phone}
            </p>

            <p>
                <strong>Cidade:</strong>{" "}
                {usuario.address.city}
            </p>

            <p>
                <strong>Website:</strong>{" "}
                {usuario.website}
            </p>
        </div>
    );
}

export default UserDetails;