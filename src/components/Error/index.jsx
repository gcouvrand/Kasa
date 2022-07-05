import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
  text-align: center;
`;
const ErrorCode = styled.h1`
  color: #ff6060;
  font-size: 10em;
`;
const ErrorMessage = styled.h2`
  color: #ff6060;
  font-weight: 500;
  margin-top: -75px;
  margin-bottom: 150px;
`;
const LinkContainer = styled.div`
  margin-bottom: 100px;
  text-decoration: underline;
`;
const StyledLink = styled(Link)`
  color: #ff6060;
`;
class Error extends React.Component {
  render() {
    return (
      <ErrorContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>
          Oups! La page que vous demandez n'existe pas.
        </ErrorMessage>
        <LinkContainer>
          <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
        </LinkContainer>
      </ErrorContainer>
    );
  }
}

export default Error;
