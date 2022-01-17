import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {Bordero} from "./style.js";
import { Loading } from "../Loading/loading.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faEdit, faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import LinkButton from "../LinkButton/linkButton.jsx";
import { Messages } from "../Message/message.jsx";
import DetailButton from "./DetailButton/detailbutton";
import EditButton from "./EditButton/editbutton";


export const Borderos = () => {
    const history = useNavigate()
    const [question, setQuestion] = useState([]);
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
            fetch('http://localhost:5000/Perguntas',{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setQuestion(data)
            setRemoveLoading(true)
        }).catch(err => console.log(err))
    },3000)
},[])

    function handleDelete(id){
        fetch(`http://localhost:5000/Perguntas/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then(data => {
            setQuestion(question.filter((questions) => questions.id !== id))
            history('/borderos',{state:{message: 'Pergunta excluida com sucesso! ', type: 'error'}})
        }).catch(err => console.log(err))
    } 

    return(
        <Bordero>
            <h3 className="titlePage">Lista de Perguntas</h3>
            {message && <Messages msg={message} type={typeMsg}/>}
            <LinkButton to="/Borderos/Cadastrar-Pergunta" text="Cadastrar Pergunta"/>
            {/* <Buttons href="/CadastrarPergunta" type="button" text="Cadastrar Pergunta" name="btnCadastrarPergunta"/> */}
            <div className="table-responsive table-cont">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>Pergunta</th>
                            <th>A</th>
                            <th>B</th>
                            <th>C</th>
                            <th>D</th>
                            <th>E</th>
                            <th>Resposta</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {question.length > 0 &&
                    question.map((question) => (
                    <tr>
                        <td title={question.pergunta}>{question.pergunta}</td>
                        <td>{question.opcaoum}</td>
                        <td>{question.opcaodois}</td>
                        <td>{question.opcaotres}</td>
                        <td>{question.opcaoquatro}</td>
                        <td>{question.opcaocinco}</td>
                        <td>{question.resposta}</td>
                        <td className="flex-display">
                            <EditButton to={`/Borderos/Cadastrar-Pergunta/${question.id}`}>
                            </EditButton>
                            <DetailButton to={`/Borderos/Pergunta/${question.id}`}>
                            </DetailButton>
                            <button className="delete-box delete" id={question.id} onClick={() => handleDelete(question.id)}>
                                <FontAwesomeIcon className="action" icon={faTrash}/>
                            </button>
                        </td>
                    </tr>))
                    }{!removeLoading && <tr><td colSpan="8"><Loading /></td></tr>}
                    </tbody>
                </table>
            </div>           
                
        </Bordero>
    )
}
