function UserDetailsComponent({ usuario, onFecharDetalhes, setModalEditarUsuarioAberto, setUsuarioSelecionadoEditar }) {
    

    return(
        <div>
            <h2>Detalhes do usuário</h2>
            <button className="botao-fechar-detalhes" onClick={onFecharDetalhes}>Fechar detalhes</button>
            <p>
                <strong>Nome: </strong>{usuario.name}
            </p>

            <p>
                <strong>E-mail: </strong>{usuario.email}
            </p>

            <p>
                <strong>Cidade: </strong>{usuario.address.city}
            </p>

            <p>
                <strong>Telefone: </strong>{usuario.phone}
            </p>

            <p>
                <strong>Website: </strong>{usuario.website}
            </p>
            <button className="botao-fechar-detalhes" onClick={() => {
                    setModalEditarUsuarioAberto(true)
                    setUsuarioSelecionadoEditar(usuario)
                }
            }>Editar</button>

        </div>
    )
}

export default UserDetailsComponent