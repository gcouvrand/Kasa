import React from "react";

class Equipments extends React.Component {
    render() {
        /* Grâce à la méthode map, on itère à travers un tableau, ici pour créer des éléments 
        <li> contenant chacun des éléments du tableau en leur adjoignant une key, nécessaire 
        dans ce cas dans React */
        const listEquipments = this.props.equipments.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)
        return (
            <ul>{listEquipments}</ul>
        )
    }
}

export default Equipments