import "../../index.css";
import Banner from "../../components/Banner";
import banner from "../../assets/banner_about.png";
import Dropdown from "../../components/Dropdown";
import styled from "styled-components";
import React from "react";

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class About extends React.Component {
  render() {
    return (
      <div>
        <Banner bannerImg={banner} />
        <DropdownContainer>
          <Dropdown
            title="Fiabilité"
            text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont
      conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <Dropdown
            title="Respect"
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
      discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
          />
          <Dropdown
            title="Service"
            text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
      N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Dropdown
            title="Sécurité"
            text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
      voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note
      aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
      Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </DropdownContainer>
      </div>
    );
  }
}

export default About;
