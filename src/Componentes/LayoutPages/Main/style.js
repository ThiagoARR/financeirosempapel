import styled from 'styled-components';

export const MainDiv = styled.div `
    grid-area: CT;
    position: relative;
    padding: 30px;
    background-color: #fff;
    overflow-y: scroll;
    /* box-shadow: inset 0px 0px 11px; */
    
    ::-webkit-scrollbar{
        display:none;
    }
    
`;