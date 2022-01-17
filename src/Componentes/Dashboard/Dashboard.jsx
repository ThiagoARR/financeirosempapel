import React, { useContext, useEffect, useState } from "react";
import { Dashboard, InfoCoins, DashStats, DashGrid, CoinTiles} from "./style";
import tokenABI from "../ABI.js";
import { Dashcards } from "./Dashcard/dashcard.jsx";


function Dash(){
    
    return(   
        <Dashboard>
            <DashStats>
                    <Dashcards text="300%" bg="boxCompany none"/>
                    <Dashcards text="100%" bg="boxCompany none"/>
                    <Dashcards text="30%" bg="boxCompany none"/>
            </DashStats>
            <DashGrid>
            </DashGrid>            
        </Dashboard>
    )
}

export default Dash;