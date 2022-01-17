import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Inputs } from "../Formularios/Inputs/input.js";
import { Buttons } from "../Bordero/Button/button";
import NewQuestion from "../Formularios/CadastroPerguntaForm/CadastroPerguntaForm.jsx";


export const DetalharPergunta = () => {
    const { id } = useParams()
    const [question, setQuestion] = useState([]);
   
    useEffect(() => {
    fetch(`http://localhost:5000/Perguntas/${id}`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    },)
    .then((resp) => resp.json())
    .then((data) => {
        setQuestion(data);
    }).catch(err => console.log(err))
    },[id])

    return(
        <div>
            <h3 className="titlePage">Detalhe Pergunta</h3>
        </div>
    )
}
