import styled from "styled-components"
import { IoAddCircle } from "react-icons/io5"
import { AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom"

export default function Topic({title, sub, classTopic, route}) {
    return (
        <TopicContainer className = {classTopic}>
            <Title>{title}</Title>
            <Link to = {`/${route[0]}`}>
                <Sub>
                    {sub[0]}
                    <AiFillEye size = {24}/>
                </Sub>
            </Link>
            <Link to = {`/${route[1]}`}>
                <Sub>
                    {sub[1]}
                    <IoAddCircle size = {24}/>
                </Sub>
            </Link>
        </TopicContainer>
    )
}

const TopicContainer = styled.div`
    border-bottom: 1px solid white;
    padding: 20px;
`
const Title = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: white;
`
const Sub = styled(Title)`
    margin-left: 10px;
    margin-top: 10px;
    font-weight: 400;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    
    cursor: pointer;
    opacity: 0.7;

    &&:hover {
        filter: brightness(0.6);
    }
`