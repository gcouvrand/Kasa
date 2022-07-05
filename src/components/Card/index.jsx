import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled(Link)`
  position: relative;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  margin-bottom: 50px;
  background: linear-gradient(white, black);
  margin-right: 20px;
  margin-left: 20px;
  @media (max-width: 480px) {
    margin-right: 0;
    margin-left: 0;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  border-radius: 10px;
`;

const CardTitle = styled.span`
  position: absolute;
  bottom: 5%;
  left: 5%;
  color: white;
  width: 50%;
`;

class Card extends React.Component {
  render() {
    return (
      // On ajoute à l'URL de la fiche logement l'id du logement qui va être affiché
      <CardContainer to={"/Logement/" + this.props.id}>
        <CardImg src={this.props.cover} alt="illustration" />
        <CardTitle>{this.props.title}</CardTitle>
      </CardContainer>
    );
  }
}

export default Card;
