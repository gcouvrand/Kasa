import React from "react";

class Equipments extends React.Component {
    render() {
        const listEquipments = this.props.equipments.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)
        return (
            <ul>{listEquipments}</ul>
        )
    }
}

export default Equipments