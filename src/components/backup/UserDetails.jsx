function UserDetails({ usuario, onFecharDetalhes }) {

    return (
        <aside className="panel details-panel" aria-labelledby="details-heading">
            <div className="details-panel__top">
                <h2 id="details-heading">Detalhes do usuário</h2>
                <button className="close-button" aria-label="Fechar detalhes" onClick={onFecharDetalhes}>×</button>
            </div>
            <dl className="detail-list">
                <div className="detail-row"><dt>Nome</dt><dd>{usuario.name}</dd></div>
                <div className="detail-row"><dt>Usuário</dt><dd>{usuario.username}</dd></div>
                <div className="detail-row"><dt>E-mail</dt><dd>{usuario.email}</dd></div>
                <div className="detail-row"><dt>Telefone</dt><dd>{usuario.phone}</dd></div>
                <div className="detail-row"><dt>Cidade</dt><dd>{usuario.address.city}</dd></div>
                <div className="detail-row"><dt>Website</dt><dd>{usuario.website}</dd></div>
                <div className="detail-row"><dt>Empresa</dt><dd>{usuario.company.name}</dd></div>
                <div className="detail-row"><dt>Rua</dt><dd>{usuario.address.street}</dd></div>
                <div className="detail-row"><dt>Complemento</dt><dd>{usuario.address.suite}</dd></div>
                <div className="detail-row"><dt>CEP</dt><dd>{usuario.address.zipcode}</dd></div>
            </dl>
        </aside>
    );
}

export default UserDetails;