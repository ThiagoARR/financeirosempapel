import styled from "styled-components";

export const LayoutDiv = styled.div `
    display: grid;
    grid-template-columns: auto 9fr;
    grid-template-rows: 50px auto;
    grid-template-areas: 
    "LG PB"
    "SB CT";
    height: 100vh;
    white-space: nowrap;
`;