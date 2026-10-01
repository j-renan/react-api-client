function ExcluirUsusarioComponent({ usuario, onFecharDetalhes, onExcluirUsuario }) {
    return(
        <div>
            <h2>Excluir Usuário</h2>
            
            <p>
                Deseja realmente excluir o usuário <strong>{usuario.name}</strong>?
            </p>

            <button className="botao-cancelar" onClick={onFecharDetalhes}>Cancelar</button>
            <button className="botao-confirmar-exclusao" onClick={() => onExcluirUsuario(usuario.id)}>Ok</button>
        </div>
    )
}

export default ExcluirUsusarioComponent