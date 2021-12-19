import React from "react";
import {ReactComponent as GreyStar } from "../../assets/star_grey.svg"
import {ReactComponent as RedStar} from "../../assets/star_red.svg"

class Rating extends React.Component {
    render() {
        const totalStars = [];
        const rating = this.props.rating;
        let index = 0;

        // boucle for permettant d'ajouter étoiles rouges et grises en fonction des données "rating"
        for (let i=0; i < 5; i++) {
            index++
            rating > i ? (totalStars.push(<RedStar  key={`${totalStars}-${index}`}/>)) : (totalStars.push(<GreyStar key={`${totalStars}-${index}`}/>))
        }
        return (
            <span className="stars_bar">{totalStars}</span>
        )  
    }
}

export default Rating