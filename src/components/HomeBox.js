import styled from "styled-components"
import { IoIosRedo } from "react-icons/io";


export default function HomeBox({name, description}) {

    const display = description === "" ? "none" : "initial"

    return (
        <BoxContainer>
            <div>
                <Title>{name}</Title>
                <IoIosRedo size = {24} display = {display}/>
            </div>
            <Description>{description}</Description>
        </BoxContainer>
    )
}

const BoxContainer = styled.div`
    width: 400px;
    height: 100px;
    border-radius: 6px;
    background-color: #ADD8E6;
    opacity: 0.7;
    cursor: pointer;
    padding: 10px;

    && div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
const Title = styled.h1`
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
`
const Description = styled(Title)`
    color: black;
    font-family: 'Roboto', sans-serif;
    margin-top: 10px;
    font-size: 16px;
`