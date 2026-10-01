function SuccessMessage({ mensagem }) {
    return (
        <p className="feedback feedback--success success-snackbar" role="status" aria-live="polite">
            {mensagem}
        </p>
    );
}

export default SuccessMessage;