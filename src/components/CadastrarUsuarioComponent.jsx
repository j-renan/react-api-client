import { useState } from "react";
import FormUsuarioComponent from "./FormUsuarioComponent";

function CadastrarUsuarioComponent({ onCadastrar }){
    const [nome, setNome] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")

    function handleSubmit(evento) {
        evento.preventDefault()
        const novoUsuario = {
            name: nome,
            username: username,
            email: email,
            phone: telefone
        }

        onCadastrar(novoUsuario)
        limparFormulario()
    }

    function limparFormulario() {
        setNome("")
        setUsername("")
        setEmail("")
        setTelefone("")
    }

    return (
        <FormUsuarioComponent
            usuario={{ name: nome, username: username, email: email, phone: telefone }}
            textHeader="Cadastroooooooooooooooooo"
            textTitle="Novo usuário"
            setNome={setNome}
            setUsername={setUsername}
            setEmail={setEmail}
            setTelefone={setTelefone}
            handleSubmit={handleSubmit}
        />
    )
}

export default CadastrarUsuarioComponent