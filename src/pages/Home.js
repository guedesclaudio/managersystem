import styled from "styled-components"
import SideBar from "../components/SideBar"
import BodyStyle from "./style"
import HomeBox from "../components/HomeBox";
import { boxes } from "../data/boxes";

export default function Home() {
    return (
        <Container>
            <BodyStyle/>
            <SideBar/>
            <Boxes>
                <WelcomeMessage>Olá, bem vindo <strong>Arte Natu!</strong></WelcomeMessage>
                <img src = "https://img.freepik.com/vetores-gratis/adesivo-caixa-vazia-aberta-em-fundo-branco_1308-68243.jpg?w=2000"/>
                <BoxTemplate>
                    {boxes.map((value, index) => <HomeBox key = {index} name = {value.name} description = {value.description} route = {value.route}/>)}
                </BoxTemplate>
            </Boxes>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 400px;
`
const Boxes = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;

    && img {
        width: 200px;
        margin-top: 100px;
    }
`
const WelcomeMessage = styled.h1`
    margin-top: 100px;
    color: grey;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 400;
`
const BoxTemplate = styled.div`
    margin-top: 100px;
    width: 810px;
    height: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    && :hover {
        opacity: 1.0;
    }
`