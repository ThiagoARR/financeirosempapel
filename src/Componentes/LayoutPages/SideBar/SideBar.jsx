import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { SidebarDiv } from "./style.js";
import { Route, Routes } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export const Sidebar = ({sidebarOpen, closeSidebar}) => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {fetch('http://localhost:5000/Menu', {
        method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
    }).then((resp) => resp.json())
    .then((data) => {
        setMenu(data);
    }).catch(err => console.log(err))},[])

    return(
        <SidebarDiv className={!sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <ul>
                {menu.length > 0 && 
                    menu.map((key) => (
                        key.active? <NavLink to={key.path}><li key={key.id}>{key.nome}</li></NavLink>:''))
                }                
            </ul>
        </SidebarDiv>
    )
}
