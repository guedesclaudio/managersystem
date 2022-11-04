import styled from "styled-components"
import { FcOpenedFolder } from "react-icons/fc"
import { FiLogOut } from "react-icons/fi"
import { IoAddCircle } from "react-icons/io5"
import { AiFillEye } from "react-icons/ai"
import { topics } from "../data/topics"
import { Link } from "react-router-dom"

function Topic({title, sub, classTopic, route}) {
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

export default function SideBar() {

    return (
        <Container>
            <LogoTemplate>
                <Link to = {"/home"}><Logo>Manager System</Logo></Link>
                <FcOpenedFolder size = {30}/>
            </LogoTemplate>
            {topics.map((value, index) => <Topic key = {index} classTopic = {value.class} title = {value.title} sub = {value.sub} route = {value.route}/>)}
            <Exit>
                <FiLogOut color = "red" size = {30}/>
            </Exit>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 400px;
    height: 100vh;
    background-color: #ADD8E6;
    box-shadow: 0 8px 12px 0 rgba( 31, 38, 135, 0.37 );

    && .first {
        border-top: 1px solid white;
    }
`
const LogoTemplate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 50px;
`
const Logo = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: white;
`
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
const Exit = styled.div`
    position: absolute;
    bottom: 0;
    padding: 10px;
    cursor: pointer;
`