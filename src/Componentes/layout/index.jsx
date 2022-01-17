import React from "react";
import {LayoutDiv} from './style.js';
import {Sidebar} from "../LayoutPages/SideBar/SideBar.jsx";
import { Logos } from "../LayoutPages/Logo/Logo.jsx";
import { Headerbars } from "../LayoutPages/HeaderBar/HeaderBar.jsx";
import { MainDivs } from "../LayoutPages/Main/Main.jsx";

export const Layout = ({sidebarOpen, closeSidebar, openSidebar}) =>{

    return(
        <LayoutDiv className={!sidebarOpen ? "gridline" : ""}>
            <Logos sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
            <Headerbars/>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            <MainDivs/>
        </LayoutDiv>
    )
}