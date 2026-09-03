function SuccessMessage({ mensagem }) {
    return (
        <p className="feedback feedback--success" role="status">{mensagem}</p>
    );    
}

export default SuccessMessage;