function ExcluirUsusarioComponent({ usuario, onFecharDetalhes, onExcluirUsuario }) {
    return(
        <div>
            <h2>Excluir Usuário</h2>
            
            <p>
                Deseja realmente excluir o usuário <strong>{usuario.name}</strong>?
            </p>

            <button onClick={onFecharDetalhes}>Cancelar</button>
            <button onClick={() => onExcluirUsuario(usuario.id)}>Ok</button>
        </div>
    )
}

export default ExcluirUsusarioComponent