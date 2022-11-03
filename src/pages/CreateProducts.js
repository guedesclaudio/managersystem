import styled from "styled-components"
import SideBar from "../components/SideBar"
import BodyStyle from "./style"

export default function CreateProducts() {

    return (
        <Container>
            <BodyStyle/>
            <SideBar/>
            <CreateContainer>
                <Box>
                    <form>
                        <Inputs>
                            <input type = "text" placeholder = "nome do produto"/>
                            <input type = "text" placeholder = "descrição do produto" className = "description"/>
                        </Inputs>
                        <Inputs>
                            <input type = "text" placeholder = "preço do produto"/>
                            <select>
                                <option>Anéis</option>
                                <option>Pulseiras</option>
                            </select>
                        </Inputs>
                        <Button>
                            <button type = "submit">Cadastar</button>
                            <p>Cadastre um novo <strong>produto</strong>!</p>
                        </Button>
                    </form>
                </Box>
            </CreateContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 400px;
`
const CreateContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    width: 50vw;    
    height: 300px;
    border: 1px solid #ADD8E6;
    border-radius: 6px;
    margin-top: 100px;
    padding: 20px;

    
    && input, && textarea {
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
    }

    && input::placeholder {
        padding-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
    }

    && .description {
        width: 540px;
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
const Inputs = styled.div`

`
const Button = styled.div`
    margin-top: 100px;
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