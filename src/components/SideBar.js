import styled from "styled-components"
import { FcOpenedFolder } from "react-icons/fc"
import { FiLogOut } from "react-icons/fi"
import { topics } from "../data/topics"
import { Link } from "react-router-dom"
import Topic from "./Topic"

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
const Exit = styled.div`
    position: absolute;
    bottom: 0;
    padding: 10px;
    cursor: pointer;
`