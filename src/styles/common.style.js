import styled from "styled-components"

const Button = styled.button`
    margin-left: 10px;
    width: 150px;
    height: 40px;
    border-radius: 6px;
    border: none;
    background-color: #ADD8E6;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: grey;
    cursor: pointer;

    &&:hover {
        filter: brightness(0.8);
    }
`

const Select = styled.select`
    width: 150px;
    height: 40px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: grey;
    outline: none;
    padding-left: 10px;
    background-color: #ADD8E6;
    border: none;
    border-radius: 6px;
`

const Input = styled.input`
    width: 300px;
    height: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 6px;
    border: none;
    background-color: #ADD8E6;
    padding-left: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: grey;
    outline: none;

    &&::placeholder {
        padding-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
    }
`
const CreateContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: grey;

    &&:hover {
        filter: brightness(1.5);
    }
`
const Inputs = styled.div``

export {
    Button,
    Select,
    Input,
    CreateContainer,
    Inputs,
    Text
}