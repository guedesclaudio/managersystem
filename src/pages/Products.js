import styled from "styled-components"
import { BsTrash } from "react-icons/bs"
import { GrEdit } from "react-icons/gr"
import { IoAddCircle } from "react-icons/io5"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import { useEffect, useState, useContext } from "react"
import { getProducts, deleteProduct, getCategories } from "../services/api"
import { handleForm } from "../helpers/handleForm"
import Mold from "./Mold"
import { Button, Select, Text } from "../styles/common.style"

function Product({name, description, price, category, productId, setCallApi}) {

    let priceFormated = price.toString().replace(".", ",")
    const {config} = useContext(UserContext)

    async function removeProduct() {

        const deleteConfirm = window.confirm(`Tem certeza que deseja excluir ${name}?`)

        try {
            if (deleteConfirm === true) {
                await deleteProduct(productId, config) 
                alert(`Produto ${name} deletado com sucesso!`)
                setCallApi(true)
            }
            return
        } catch (error) {
            alert(`Ocorreu um erro ${error}`)
        }
    }

    return (
        <ProductContainer>
            <Name>
                {name}
                <Icons>
                    <GrEdit color = "grey" size = {18} onClick = {() => alert("Atualização de produto ainda não está implementada")}/>
                    <BsTrash color = "red" size = {18} onClick = {removeProduct}/>
                </Icons>
            </Name>
            <Description>{description}</Description>
            <Box>
                <Price>R$ {priceFormated}</Price>
                <Category>{category}</Category>
            </Box>
        </ProductContainer>
    )

}

export default function Products() {

    const [callApi, setCallApi] = useState(true)
    const [productsData, setProductsData] = useState([])
    const [form, setForm] = useState()
    const [categoriesData, setCategoriesData] = useState([])
    const {config} = useContext(UserContext)

    function treatEvent(event) {
        event.preventDefault()
        readProducts(form)
    }

    const readProducts = async (form) => {
        try {
            const result = (await getProducts(form?.category, config)).data
            setProductsData(result)
            
        } catch (error) {
            alert(`Ocorreu um erro ${error}`)
        }
    }

    useEffect(async () => {
        if (callApi) {
            readProducts()
            setCallApi(false)
        }
    }, [callApi])

    useEffect(async () => {
        try {
            const result =  (await getCategories(config)).data
            setCategoriesData(result)
            
        } catch (error) {
            alert(`Ocorreu um erro ${error}`)
        }
    }, [])

    return (
        <Mold>
            <ListContainer>
                <Options>
                    <Link to = {"/register-product"}>
                        <Registration>
                            <Text>Cadastrar produto</Text>
                            <IoAddCircle color = "green" size = {20}/>
                        </Registration>
                    </Link>
                     <Filter>
                        <Text>Filtar produtos</Text>
                        <form onSubmit={treatEvent}>
                            <Select name = "category" onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}>
                                <option selected = "selected" value = {"all"} type = "submit">todos</option>
                                {categoriesData.map((value, index) => <option key = {index} value = {value.id}>
                                {value.name}</option>)}
                            </Select>
                            <Button type="submit">Filtrar</Button>
                        </form>
                    </Filter>
                </Options>
                <List>
                    {productsData.map((value, index) => <Product key = {index} name = {value.name} productId = {value.id}
                    description = {value.description} price = {value.price} category = {value.category} setCallApi = {setCallApi}/>)}
                </List>
            </ListContainer>
        </Mold>
    )
}

const Registration = styled.div`
    margin: 60px 0;
    width: 12vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`
const ListContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
`
const Options = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Filter = styled(Options)`
    width: 54%;
`
const List = styled.div`
    width: 50vw;
    margin-top: 20px;
    margin-bottom: 100px;
`
const ProductContainer = styled.div`
    width: 100%;   
    min-height: 140px;  
    border: 1px solid #ADD8E6;
    border-radius: 6px;
    padding: 10px;
    background-color: aliceblue;
    margin-bottom: 10px;
`
const Name = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Description = styled(Name)`
    margin-top: 10px;
    font-size: 20px;
    font-style: italic;
`
const Price = styled(Name)`
    font-size: 20px;
    margin-top: 40px;
    color: orange;
`
const Icons = styled.div`
    cursor: pointer;
`
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Category = styled(Description)`
    margin-top: 40px;
`