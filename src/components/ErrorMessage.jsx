function ErrorMessage({ mensagem }) {
    return (
        <p className="feedback feedback--error" role="alert">{mensagem}</p>
    );
}

export default ErrorMessage;