function Header({ titulo }) {
    return (
        <header className="app-header">
            <div>
                <p className="app-kicker">Diretório digital</p>
                <h1>{titulo}</h1>
            </div>
            <span className="app-header-mark" aria-hidden="true">◎</span>
        </header>
    );
}

export default Header;