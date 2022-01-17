import styled from 'styled-components';

export const SidebarDiv = styled.div `
    grid-area: SB;
    display: flex;
    flex-direction: column;
    background-color: #2f3136;
    border-right-style: solid;
    border-right-width: 2px;
    border-right-color: #3e4247;
    overflow-y: scroll;
    width: 230px;
    transition: all 0.2s !important;
    color: #334D6E;
    font-weight: bold;
    ::-webkit-scrollbar{
    display:none;
    }
    > ul{
        padding-top: 15px;
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    > ul > a > li{
        padding: 12px 15px;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    }
`;