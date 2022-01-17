import React, { useContext, useState } from "react";
import { Headerbar, UserName, UserImg, UserInfo, Connect } from "./style";


export const Headerbars = () =>{
    return(
        <Headerbar>
            <UserInfo className='showFlex'>
                <UserImg></UserImg>
                <UserName></UserName>
            </UserInfo>
        </Headerbar>
    )
}