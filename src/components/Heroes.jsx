import { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "./Card"

const StyleTitle = styled.h1 `
    text-align: center;
    color: #df8634;
    margin-bottom: 20px;
`

const StyleMain = styled.main `
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

function Heroes() {
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        fetch("https://api.opendota.com/api/heroStats").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setHeroes(resp)
        })
    }, [])
    
    return(
        <>
            <StyleTitle>Selecione um herói</StyleTitle>

            <StyleMain>
                {
                    heroes.map((hero, index) => (
                        <Card key={index} hero={hero}/>
                    ))
                }
            </StyleMain>
        </>
    )
}

export default Heroes