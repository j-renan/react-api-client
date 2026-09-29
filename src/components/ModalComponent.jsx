function ModalComponent({ children, onFechar, titulo = "Detalhes do usuário" }) {
    return (
        <div className="modal-overlay" onClick={onFechar}>
            <div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-label={titulo}
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="modal-fechar"
                    aria-label={`Fechar ${titulo.toLowerCase()}`}
                    onClick={onFechar}
                >
                    ×
                </button>

                {children}
            </div>
        </div>
    );
}

export default ModalComponent;