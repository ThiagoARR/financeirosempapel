import styled from "styled-components";

export const Headerbar = styled.div`
grid-area: PB;
padding: 15px 5px;
    background-color: rgb(32,34,37);
    border-bottom: 1px solid #333;
display: flex;
justify-content: flex-end;
align-items: center;
padding: 0 11px 0 16px;

z-index: 2;
`;

export const UserInfo = styled.div`
display: flex;
align-self: flex-end;
margin: auto 0;
`


export const UserImg = styled.div`
background-color: #999;
width: 25px;
height: 25px;
border-radius: 50%;
margin: auto 0;
`

export const UserName = styled.div`
display: flex;
justify-content: space-between;
color: white;
font-weight: bold;
margin: auto 0;
margin-right: 10px;
padding: 10px;
`;

export const Connect = styled.div`
color: #fff;
font-weight: bold;
background: #6633cc;
padding: 8px;
border-radius: 4px;
cursor: pointer;


`;
