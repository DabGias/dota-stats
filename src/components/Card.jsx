import styled from "styled-components"
import strIcon from "../img/str.png"
import agiIcon from "../img/agi.png"
import intIcon from "../img/int.png"
import meleeIcon from "../img/melee.png"
import rangedIcon from "../img/ranged.png"


const StyleCard = styled.div `
    height: 320px;
    width: 320px;
    padding: 20px;
    margin: 20px;
    border: 2px solid #FEFEFE;
    border-radius: 20px;
    text-align: center;
    transition: 250ms;

    :hover {
        background-color: #303030;
        transform: scale(1.05);
        cursor: pointer;
        border: 2px solid #df8634;
        transition: 250ms;

        .attrs {
            border: 2px solid #df8634;
            transition: 250ms;
        }
    }

    .photo {
        margin: 20px 0;
        width: 90%;
        border-radius: 20px;
    }

    .str {
        border: 2px solid red;
    }

    .agi {
        border: 2px solid #00aa00;
    }

    .int {
        border: 2px solid #5bc3ff;
    }

    .attrs {
        background-color: #303030;
        border: 2px solid #FEFEFE;
        border-radius: 20px;
        padding: 20px;
        width: 80%;
        margin: auto;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        transition: 250ms;
    }

    .attr {
        width: 25%;
    }

    .attk-type {
        width: 20%;
    }
`

function Card(props) {
    return(
        <>
            <StyleCard key={props.hero.id} className="card">
                <h2>{props.hero.localized_name}</h2>
                <img src={"https://api.opendota.com" + props.hero.img} alt="" className={"photo " + props.hero.primary_attr}/>
                <div className="attrs">
                    {props.hero.primary_attr === "str" ? <img src={strIcon} alt="" className="attr"/> 
                    : props.hero.primary_attr === "agi" ? <img src={agiIcon} alt="" className="attr"/> 
                    : <img src={intIcon} alt="" className="attr"/>}
                    {props.hero.attack_type === "Melee" ? <img src={meleeIcon} alt="" className="attk-type"/> 
                    : <img src={rangedIcon} alt="" className="attk-type"/>}
                </div>
            </StyleCard>
        </>
    )
}

export default Card