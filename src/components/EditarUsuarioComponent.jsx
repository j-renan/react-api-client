import { useState } from "react";
import FormUsuarioComponent from "./FormUsuarioComponent";

function EditarUsuarioComponent({ onEditar, usuarioSelecionadoEditar }){
    console.log("EditarUsuarioComponent - usuarioSelecionadoEditar: ", usuarioSelecionadoEditar);
    const [nome, setNome] = useState(usuarioSelecionadoEditar?.name || "")
    const [username, setUsername] = useState(usuarioSelecionadoEditar?.username || "")
    const [email, setEmail] = useState(usuarioSelecionadoEditar?.email || "")
    const [telefone, setTelefone] = useState(usuarioSelecionadoEditar?.phone || "")

    function handleSubmit(evento) {
        evento.preventDefault()
        const usuarioEditado = {
            name: nome,
            username: username,
            email: email,
            phone: telefone
        }

        onEditar(usuarioSelecionadoEditar.id, usuarioEditado)
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
            textHeader="Editar"
            textTitle="Editar Dados do usuário"
            setNome={setNome}
            setUsername={setUsername}
            setEmail={setEmail}
            setTelefone={setTelefone}
            handleSubmit={handleSubmit}
        />
    )
}

export default EditarUsuarioComponent