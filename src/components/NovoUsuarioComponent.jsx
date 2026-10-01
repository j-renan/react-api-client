function NovoUsuarioComponent({ novoUsuario }) {
    const campos = [
        { rotulo: "Nome", valor: novoUsuario?.name },
        { rotulo: "Usuário", valor: novoUsuario?.username },
        { rotulo: "E-mail", valor: novoUsuario?.email },
    ];

    return (
        <section className="novo-usuario" aria-labelledby="novo-usuario-titulo">
            <p className="novo-usuario__sobretitulo">Cadastro</p>
            <h2 id="novo-usuario-titulo">Novo usuário</h2>
            {!novoUsuario && (
                <p className="novo-usuario__vazio">
                    Nenhum usuário foi cadastrado nesta sessão ainda.
                </p>
            )}
            <div className="novo-usuario__campos">
                {campos.map(({ rotulo, valor }) => (
                    <div className="novo-usuario__campo" key={rotulo}>
                        <span>{rotulo}</span>
                        <strong>{valor || "Não informado"}</strong>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NovoUsuarioComponent