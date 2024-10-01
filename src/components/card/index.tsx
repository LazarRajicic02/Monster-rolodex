import { Monster } from "../../App";
import "./Card.css";

type CardProps = {
    monster: Monster
}

const Card = ({ monster }: CardProps) => {
    const { id, name, email } = monster;
    return (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;
