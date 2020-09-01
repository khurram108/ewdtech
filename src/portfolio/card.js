import React from 'react'
import './card.css'
const Card = (props) => {

    return (<div>

        <div className="Card__Container">
            <div className="card__img">

                <img src={require(`${props.src}`)} />

            </div>
            <div className="card__title">

                <h3>{props.name}</h3>
            </div>
        </div>
    </div>)

}
export default Card