import React from "react";
import { MainDiv } from "./style.js";
import Dash  from "../../Dashboard/Dashboard";
import { Borderos } from "../../Bordero/Bordero";
import { CadastrarPergunta } from "../../CadastrarPergunta/CadastrarPergunta.jsx";
import { CadastrarUsuarios } from "../../Usuarios/CadastrarUsuario/CadastrarUsuario.jsx";
import { DetalharPergunta } from "../../DetalharPergunta/DetalharPergunta";
import { Route, Routes } from "react-router-dom";
import { Usuarios } from "../../Usuarios/Usuarios.jsx";

export const MainDivs = ({defaultAccount, web3}) => {
    
    return(
        <MainDiv>
            <Routes>
                <Route exact path="/" element={<Dash defaultAccount={defaultAccount} web3={web3}/>}/>
                <Route path="/Borderos" element={<Borderos />}/>
                <Route path="/Borderos/Cadastrar-Pergunta" element={<CadastrarPergunta />}/>
                <Route path="/Borderos/Pergunta/:id" element={<DetalharPergunta />}/>
                <Route path="/Usuarios" element={<Usuarios />}/>
                <Route path="/Usuarios/Cadastrar" element={<CadastrarUsuarios />}/>
                <Route path="/Usuarios/Detalhe/:id" element={<DetalharPergunta />}/>
            </Routes>
        </MainDiv>
    )
}
