function UserDetails({ usuario, onFecharDetalhes }) {

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

            <p>
                <strong>Empresa:</strong>{" "}
                {usuario.company.name}
            </p>

            <p>
                <strong>Rua:</strong>{" "}
                {usuario.address.street}                              
            </p>

            <p>
                <strong>Complemento:</strong>{" "}
                {usuario.address.suite}                              
            </p>

            <p>
                <strong>Cidade:</strong>{" "}
                {usuario.address.city}                              
            </p>

            <p>
                <strong>CEP:</strong>{" "}
                {usuario.address.zipcode}                              
            </p>

            <button
                onClick={onFecharDetalhes}
            >Fechar</button>
        </div>
    );
}

export default UserDetails;