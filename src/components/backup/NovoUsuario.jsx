function NovoUsuario({ novoUsuario }) {

    return (
        <section className="panel new-user-panel" aria-labelledby="new-user-heading">
            <h2 id="new-user-heading">Novo usuário cadastrado</h2>

            <p>
                <strong>Nome:</strong>{" "}
                {novoUsuario.name}
            </p>

            <p>
                <strong>Usuário:</strong>{" "}
                {novoUsuario.username}
            </p>

            <p>
                <strong>E-mail:</strong>{" "}
                {novoUsuario.email}
            </p>           
        </section>
    );
}

export default NovoUsuario;