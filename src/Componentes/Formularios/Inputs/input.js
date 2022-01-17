import styled from 'styled-components';

export const Input = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    > label {
        margin-bottom: .6em;
        font-weight: bold;
        font-size: 14px;
    }

    > input {
        padding: .5em;
        border-radius: 0;
        border: 1px solid #ccc;
        font-size: 14px;
        font-weight: 600;
    }

    > input::placeholder{
        color: #7b7b7b;
    }
`