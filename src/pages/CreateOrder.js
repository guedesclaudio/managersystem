import styled from "styled-components"
import SideBar from "../components/SideBar"
import BodyStyle from "./style"

export default function CreateOrder() {

    return (
        <Container>
            <BodyStyle/>
            <SideBar/>
            <CreateContainer>
                <Box>
                    <form>
                        <Inputs className = "first">
                            <select className = "clients">
                                <option selected>cliente</option>
                                <option>Maria Clara Costa Vaz</option>
                            </select>
                            <Total>
                                Total: R$ <strong>35,00</strong>
                            </Total>
                        </Inputs>
                        <Inputs>
                            <select>
                                <option selected>categoria</option>
                                <option>Aneis</option>
                            </select>
                            <select>
                                <option selected>produto</option>
                                <option>Anel pedra rosa</option>
                            </select>
                            <input type = "number" placeholder = "quantidade" className = "quantidade" min = "1"/>
                            <button>Adicionar produto</button>
                        </Inputs>
                        <Inputs>
                            <select>
                                <option>status</option>
                                <option>Em execução</option>
                                <option>Pago</option>
                                <option>Entregue</option>
                            </select>
                        </Inputs>
                        <List>
                            <p><strong>1</strong> Anel pedra rosa</p>
                            <p><strong>1</strong> Anel pedra rosa</p>
                            <p><strong>1</strong> Anel pedra rosa</p>
                            <p><strong>1</strong> Anel pedra rosa</p>
                            <p><strong>1</strong> Anel pedra rosa</p>
                        </List>
                        <Button>
                            <button type = "submit">Cadastar</button>
                            <p>Cadastre um novo <strong>pedido</strong>!</p>
                        </Button>
                    </form>
                </Box>
            </CreateContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 400px;
`
const Inputs = styled.div`
    margin-bottom: 10px;
`
const CreateContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    width: 36vw;    
    min-height: 330px;
    border: 1px solid #ADD8E6;
    border-radius: 6px;
    margin-top: 100px;
    padding: 20px;

    && .first {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    && input {
        width: 300px;
        height: 40px;
        margin-right: 10px;
        margin-bottom: 10px;
        border-radius: 6px;
        border: none;
        background-color: #ADD8E6;
        padding-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
        outline: none;
    }

    && input::placeholder {
        padding-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
    }

    && .quantidade {
        width: 120px;
    }

    && select {
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
        margin-right: 10px;
    }

    && .clients {
        width: 310px;
    }

    && button {
        width: 150px;
        height: 40px;
        border-radius: 6px;
        border: none;
        background-color: #ADD8E6;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
        cursor: pointer;
    }

    && button:hover {
        filter: brightness(0.8);
    }
`
const Total = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: green;
`
const Button = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 60px;

    && p {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: green;
        margin-left: 20px;
    }
`
const List = styled.div`
    width: 50%;
    margin-top: 20px;

    && p {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: grey;
        margin-bottom: 5px;
    }
`