import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Inputs } from "../Formularios/Inputs/input.jsx";
import { Buttons } from "../Bordero/Button/button";
import NewQuestion from "../Formularios/CadastroPerguntaForm/CadastroPerguntaForm.jsx";


export const CadastrarPergunta = () => {
    const history = useNavigate()
    const [question, setQuestion] = useState([]);
    
function cadastrarPergunta(question){
    fetch('http://localhost:5000/Perguntas',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(question)
    })
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        //redirect
        history('/borderos',{message: 'Pergunta criada com sucesso! '})
    }).catch(err => console.log(err))
}

    return(
        <div>
            <h3 className="titlePage">Cadastrar Pergunta</h3>
            <NewQuestion handleSubmit={cadastrarPergunta}/>
        </div>
    )
}
