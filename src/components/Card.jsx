import styled from "styled-components"
// import strIcon from "../img/str.png"
// import agiIcon from "../img/agi.png"
// import intIcon from "../img/int.png"

const StyleCard = styled.div `
    width: 320px;
    padding: 20px;
    margin: 20px;
    border: 2px solid #FEFEFE;
    border-radius: 20px;
    text-align: center;
    transition: 250ms;

    :hover {
        background-image: linear-gradient(#AA0000, #121212, #121212);
        transform: scale(1.05);
        cursor: pointer;
        transition: 250ms;

        .attrs {
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
        display: flex;
        flex-direction: column;
        border: 2px solid #FEFEFE;
        border-radius: 20px;
        padding: 20px;
        width: 90%;
        margin: auto;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        transition: 250ms;
    }
`

function Card(props) {
    return(
        <>
            <StyleCard className="card">
                <h2>{props.hero.localized_name}</h2>
                <img src={"https://api.opendota.com" + props.hero.img} alt="" className={"photo " + props.hero.primary_attr}/>
                <div className="attrs">
                    <p>Attk. Type: {props.hero.attack_type}</p>
                    <p>Base Health: {props.hero.base_health}</p>
                    <p>Base Health Regen.: {props.hero.base_health_regen}</p>
                    <p>Base Mana: {props.hero.base_mana}</p>
                    <p>Base Mana Regen.: {props.hero.base_mana_regen}</p>
                    <p>Base Armor: {props.hero.base_armor}</p>
                    <p>Base MR: {props.hero.base_mr}</p>
                    <p>Strengh: {props.hero.base_str} +{props.hero.str_gain}</p>
                    <p>Agility: {props.hero.base_agi} +{props.hero.agi_gain}</p>
                    <p>Intelligence: {props.hero.base_int} +{props.hero.int_gain}</p>
                    <p>Attk. Range: {props.hero.attack_range}</p>
                    {props.hero.attack_type === "Melee" ? "" 
                    : <p>Projectile Speed: {props.hero.projectile_speed}</p>}
                    <p>Move Speed: {props.hero.move_speed}</p>
                </div>
            </StyleCard>
        </>
    )
}

export default Card