import React from "react";
import { Logo } from "./style";
import { LocalBarSharp, Dehaze } from "@mui/icons-material"; 

export const Logos = ({openSidebar}) =>{
    return(
        <Logo>
            <Dehaze className="toggleBar" onClick={() => openSidebar()}/> 
        </Logo>
    )
}