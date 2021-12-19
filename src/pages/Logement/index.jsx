import data from "../../logements.json";
import React from "react";
import Carroussel from "../../components/Carroussel";
import Informations from "../../components/Informations";
import Dropdown from "../../components/Dropdown";
import Equipments from "../../components/Equipments";
import styled from "styled-components";
import Error from "../../components/Error";

const DropdownSection = styled.div`
    width: 100%;
    display: flex;
        @media (max-width: 480px) {
            flex-direction: column;
        }
`
const DropdownDescription = styled.div`
    width: 50%;
    @media (max-width: 480px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`
const DropdownEquipements = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 480px) {
        width: 100%;
        justify-content: center;
    }
`
const MainDiv = styled.div`
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`
class Logement extends React.Component {
    render() {
        const id = window.location.pathname.substr(10);
        const logement = data.find((item) => item.id === id);
        
    return logement === undefined ? (<Error />) : (
        <MainDiv>
       <Carroussel pictures={logement.pictures} />
        <Informations 
            title={logement.title}
            location={logement.location}
            hostname={logement.host.name}
            hostpicture={logement.host.picture}
            tags={logement.tags}
            rating={logement.rating}
        />
        <DropdownSection>
        <DropdownDescription>
        <Dropdown
            title="Description"
            text={logement.description}
        />
        </DropdownDescription>
        <DropdownEquipements>
        <Dropdown
            title="Equipements"
            text={<Equipments 
                    equipments={logement.equipments}
                />}
        />
        </DropdownEquipements>
       </DropdownSection>
       </MainDiv>
    )
}
}
export default Logement