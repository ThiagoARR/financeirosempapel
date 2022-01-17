import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Usuario } from "./style.js";
import { Loading } from "../Loading/loading.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faEdit, faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import LinkButton from "../LinkButton/linkButton.jsx";
import { Messages } from "../Message/message.jsx";
import DetailButton from "./DetailButton/detailbutton";
import EditButton from "./EditButton/editbutton";


export const Usuarios = () => {
    const history = useNavigate()
    const [usuarios, setUsuarios] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const location = useLocation();

    let message = ''
    let typeMsg = ''
    if(location.state){
        message = location.state.message;
        typeMsg = location.state.type;
    }
    useEffect(() =>{
        setTimeout(() => {
            fetch('http://localhost:5000/Usuarios',{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setUsuarios(data)
            setRemoveLoading(true)
        }).catch(err => console.log(err))
    },3000)
},[])

    function handleDelete(id){
        fetch(`http://localhost:5000/Usuarios/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then(data => {
            setUsuarios(usuarios.filter((usuarios) => usuarios.id !== id))
            history('/Usuarios',{state:{message: 'Usuario desativado com sucesso! ', type: 'error'}})
        }).catch(err => console.log(err))
    } 

    return(
        <Usuario>
            <h3 className="titlePage">Lista de Usuários</h3>
            {message && <Messages msg={message} type={typeMsg}/>}
            <LinkButton to="/Usuarios/Cadastrar" text="Cadastrar Usuario"/>
            {/* <Buttons href="/CadastrarPergunta" type="button" text="Cadastrar Pergunta" name="btnCadastrarPergunta"/> */}
            <div className="table-responsive table-cont">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Login</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {usuarios.length > 0 &&
                    usuarios.map((usuarios) => (
                    <tr>
                        <td>{usuarios.id}</td>
                        <td title={usuarios.nome+" "+usuarios.sobrenome}>{usuarios.nome+" "+usuarios.sobrenome}</td>
                        <td>{usuarios.login}</td>
                        <td>{usuarios.email}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="flex-display">
                            <EditButton to={`/usuarios/Editar/${usuarios.id}`}>
                            </EditButton>
                            <DetailButton to={`/usuarios/Detalhe/${usuarios.id}`}>
                            </DetailButton>
                            <button className="delete-box delete" id={usuarios.id} onClick={() => handleDelete(usuarios.id)}>
                                <FontAwesomeIcon className="action" icon={faTrash}/>
                            </button>
                        </td>
                    </tr>))
                    }{!removeLoading && <tr><td colSpan="8"><Loading /></td></tr>}
                    </tbody>
                </table>
            </div>           
                
        </Usuario>
    )
}
