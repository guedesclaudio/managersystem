import styled from "styled-components"
import ButtonBox from "../components/ButtonBox"
import Mold from "./Mold"
import { Select, Input, Button, CreateContainer } from "../styles/common.style"


export default function CreateOrder() {

    return (
        <Mold>
            <CreateContainer>
                <Box>
                    <form>
                        <Inputs className = "first">
                            <Select className = "clients">
                                <option selected>cliente</option>
                                <option>Maria Clara Costa Vaz</option>
                            </Select>
                            <Total>
                                Total: R$ <strong>35,00</strong>
                            </Total>
                        </Inputs>
                        <Inputs>
                            <Select>
                                <option selected>categoria</option>
                                <option>Aneis</option>
                            </Select>
                            <Select>
                                <option selected>produto</option>
                                <option>Anel pedra rosa</option>
                            </Select>
                            <Input type = "number" placeholder = "quantidade" className = "quantidade" min = "1"/>
                            <Button>Adicionar produto</Button>
                        </Inputs>
                        <Inputs>
                            <Select>
                                <option>status</option>
                                <option>Em execução</option>
                                <option>Pago</option>
                                <option>Entregue</option>
                            </Select>
                        </Inputs>
                        <List>
                            <p><strong>1</strong> Anel pedra rosa</p>
                            <p><strong>1</strong> Anel pedra rosa</p>
                            <p><strong>1</strong> Anel pedra rosa</p>
                            <p><strong>1</strong> Anel pedra rosa</p>
                            <p><strong>1</strong> Anel pedra rosa</p>
                        </List>
                        <ButtonBox>
                            <button type = "submit">Cadastar</button>
                            <p>Cadastre um novo <strong>pedido</strong>!</p>
                        </ButtonBox>
                    </form>
                </Box>
            </CreateContainer>
        </Mold>
    )
}

const Inputs = styled.div`
    margin-bottom: 10px;

    && select {
        margin-right: 10px;
    }
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
    && .quantidade {
        width: 120px;
    }
    && .clients {
        width: 310px;
    }
`
const Total = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: green;
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