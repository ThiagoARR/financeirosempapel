import React from "react";
import { useNavigate } from "react-router-dom";
import NewUser from "../../Formularios/CadastroUsuarioForm/CadastroUsuarioForm.jsx";


export const CadastrarUsuarios = () => {
    const history = useNavigate()
    
function cadastrarUsuario(usuarios){
    fetch('http://localhost:5000/Usuarios',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(usuarios)
    })
    .then((resp) => resp.json())
    .then((data) => {
        //redirect
        history('/Usuarios',{state:{message: 'Usuario criado com sucesso ', type: 'success'}})
    }).catch(err => console.log(err))
}

    return(
        <div>
            <h3 className="titlePage">Cadastrar Usuario</h3>
            <NewUser handleSubmit={cadastrarUsuario}/>
        </div>
    )
}
