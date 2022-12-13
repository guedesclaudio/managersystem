import styled from "styled-components"
import { Link } from "react-router-dom"
import { IoAddCircle } from "react-icons/io5"
import { useContext, useEffect, useState } from "react"
import { deleteCategory, getCategories } from "../services/api"
import { UserContext } from "../contexts/UserContext"
import { GrEdit } from "react-icons/gr"
import { BsTrash } from "react-icons/bs"
import Mold from "./Mold"

function Category({name, numberProducts, categoryId, setCallApi}) {

    const {config} = useContext(UserContext)

    async function removeCategory() {

        const deleteConfirm = window.confirm(`Tem certeza que deseja excluir ${name}?`)

        try {
            if (deleteConfirm === true) {
                await deleteCategory(categoryId, config) 
                alert(`Categoria ${name} deletado com sucesso!`)
                setCallApi(true)
            }
            return
        } catch (error) {
            alert(`Ocorreu um erro ${error}`)
        }
    }

    return (
        <CategoryContainer>
            <Name>{name}</Name>
            <Total>Quantidade: <strong>{numberProducts}</strong></Total>
            <Icons>
                <GrEdit color = "grey" size = {18} onClick = {() => alert("Atualização de categoria ainda não está implementada")}/>
                <BsTrash color = "red" size = {18} onClick = {removeCategory}/>
            </Icons>
        </CategoryContainer>
    )
}

export default function Categories() {

    const [categoriesData, setCategoriesData] = useState([])
    const {config} = useContext(UserContext)
    const [callApi, setCallApi] = useState(true)

    const readCategories = async () => {
        try {
            const result =  (await getCategories(config)).data
            setCategoriesData(result)
            
        } catch (error) {
            console.log(error)
            alert(`Ocorreu um erro ${error}`)
        }
    }

    useEffect(async () => {
       if (callApi) {
        readCategories()
        setCallApi(false)
       }
    }, [callApi])

    return (
        <Mold>
            <List>
                <Link to = {"/register-category"}>
                    <Registration>
                        <p>Cadastrar categoria</p>
                        <IoAddCircle color = "green" size = {20}/>
                    </Registration>
                </Link>
                {categoriesData.map((value, index) => <Category key = {index} categoryId = {value.id}
                name = {value.name} numberProducts = {value.number_products} setCallApi = {setCallApi}/>)}
            </List>
        </Mold>
    )
}

const List = styled.div`
    margin-top: 0px;
`
const CategoryContainer = styled.div`
    width: 500px;
    border-radius: 6px;
    background-color: aliceblue;
    height: 40px;
    border: 1px solid #ADD8E6;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
`
const Name = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: grey;
    width: 60%;
`
const Total = styled(Name)`
    font-size: 18px;
    width: 30%;
`
const Registration = styled.div`
    margin: 60px auto;
    width: 14vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    && p {
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        color: grey;
    }

    && p:hover {
        filter: brightness(1.5);
    }
`
const Icons = styled.div`
    cursor: pointer;
`