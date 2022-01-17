import React from 'react';
import { Buttons } from '../../Bordero/Button/button';
import { Inputs } from '../Inputs/input.jsx';
import { useState } from "react";
import { Selects } from '../../Formularios/Select/select.jsx'
import { useEffect } from 'react';

function NewQuestion({handleSubmit, btnText, usuariosData}){
    const [tipoUsuario, setTipoUsuario] = useState([])
    const [usuarios, setUsuarios] = useState(usuariosData || {})

    useEffect(()=>{
        fetch('http://localhost:5000/TipoUsuario',{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setTipoUsuario(data)
    }).catch(err => console.log(err))
    },[])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(usuarios)
    }

    function handleChange(e){
        setUsuarios({...usuarios, [e.target.name]: e.target.value})
    }

    function handleUserType(e){
        setUsuarios({
            ...usuarios,
            tipousuario:{
                id: e.target.value,
                tipousuario: e.target.options[e.target.selectedIndex].text,
            },
            }) 
    }
    return(
        <form onSubmit={submit} className="form-usuario">
                <div className="row">
                        <div className="col-md-6">
                            <Inputs 
                            className="form-control"
                            type="text"
                            text="Nome" 
                            name="nome"
                            placeholder="Digite o nome"
                            handleOnChange={handleChange}
                            value={usuarios.nome ? usuarios.nome : ''}
                            />
                        </div>
                        <div className="col-md-6">
                        <Inputs 
                        className="form-control"
                        type="text"
                        text="Sobrenome" 
                        name="sobrenome"
                        placeholder="Digite o Sobrenome"
                        handleOnChange={handleChange}
                        value={usuarios.sobrenome ? usuarios.sobrenome : ''}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Inputs 
                        className="form-control"
                        type="text"
                        text="Email" 
                        name="email"
                        placeholder="Digite o Email"
                        handleOnChange={handleChange}
                        value={usuarios.email ? usuarios.email : ''}
                        />
                    </div>
                    <div className="col-md-6">
                        <Inputs 
                        className="form-control"
                        type="text"
                        text="Login" 
                        name="login"
                        placeholder="Digite o Login"
                        handleOnChange={handleChange}
                        value={usuarios.login ? usuarios.login : ''}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Selects 
                        text="Selecione o Tipo de Usuário"
                        name="id"
                        options={tipoUsuario}
                        handleOnChange={handleUserType}
                        value={usuarios.tipousuario ? usuarios.tipousuario.id : ''}/>
                    </div>
                </div>
                <Buttons 
                type="submit"
                className="btn" 
                text="Cadastrar"
                id="btnCadastrarPergunta"/>
            </form>
    )
}

export default NewQuestion;