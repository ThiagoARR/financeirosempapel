import React from 'react';
import { Buttons } from '../../Bordero/Button/button';
import { Inputs } from '../Inputs/input.jsx';
import { useState } from "react";
import { Selects } from '../../Formularios/Select/select.jsx'
import { useEffect } from 'react';

function NewQuestion({handleSubmit, btnText, questionData}){
    const [dificulties, setDificulties] = useState([])
    const [question, setQuestion] = useState(questionData || {})

    useEffect(()=>{
        fetch('http://localhost:5000/Dificuldade',{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setDificulties(data)
    }).catch(err => console.log(err))
    },[])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(question)
    }

    function handleChange(e){
        setQuestion({...question, [e.target.name]: e.target.value})
    }

    function handleDificulty(e){
        setQuestion({
            ...question,
            dificulties:{
                id: e.target.value,
                dificulties: e.target.options[e.target.selectedIndex].text,
            },
            }) 
    }
    return(
        <form onSubmit={submit} className="form-pergunta">
                <div className="row">
                        <div className="col-md-12">
                            <Inputs 
                            className="form-control"
                            type="text"
                            text="Pergunta" 
                            name="pergunta"
                            placeholder="Digite a pergunta"
                            handleOnChange={handleChange}
                            value={question.pergunta ? question.pergunta : ''}
                            />
                        </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Inputs 
                        className="form-control"
                        type="text"
                        text="Alternativa 1" 
                        name="opcaoum"
                        placeholder="Digite a Alternativa"
                        handleOnChange={handleChange}
                        value={question.opcaoum ? question.opcaoum : ''}
                        />
                    </div>
                    <div className="col-md-6">
                        <Inputs 
                        className="form-control"
                        type="text"
                        text="Alternativa 2" 
                        name="opcaodois"
                        placeholder="Digite a Alternativa"
                        handleOnChange={handleChange}
                        value={question.opcaodois ? question.opcaodois : ''}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Inputs 
                        className="form-control"
                        type="text"
                        text="Alternativa 3" 
                        name="opcaotres"
                        placeholder="Digite a Alternativa"
                        handleOnChange={handleChange}
                        value={question.opcaotres ? question.opcaotres : ''}
                        />
                    </div>
                    <div className="col-md-6">
                        <Inputs 
                        className="form-control"
                        type="text"
                        text="Alternativa 4" 
                        name="opcaoquatro"
                        placeholder="Digite a Alternativa"
                        handleOnChange={handleChange}
                        value={question.opcaoquatro ? question.opcaoquatro : ''}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Inputs 
                        className="form-control"
                        type="text"
                        text="Alternativa 5" 
                        name="opcaocinco"
                        placeholder="Digite a Alternativa"
                        handleOnChange={handleChange}
                        value={question.opcaocinco ? question.opcaocinco : ''}
                        />
                    </div>
                    <div className="col-md-6">
                        <Inputs 
                        className="form-control"
                        type="text"
                        text="Resposta" 
                        name="resposta"
                        placeholder="Digite a Alternativa"
                        handleOnChange={handleChange}
                        value={question.resposta ? question.resposta : ''}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Selects 
                        text="Selecione a Dificuldade"
                        name="id"
                        options={dificulties}
                        handleOnChange={handleDificulty}
                        value={question.dificulties ? question.dificulties.id : ''}/>
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