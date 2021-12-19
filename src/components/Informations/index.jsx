import React from "react";
import Tagbar from "../Tagbar";
import Rating from "../Rating";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    height: auto;
    width: 100%;
    justify-content: space-between;
        @media (max-width: 480px) {
            flex-direction: column;
            height: auto;
        }
`
const SecondContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
        @media (max-width: 480px) {
            flex-direction: row-reverse;
            width: 100%;
            justify-content: space-between;
        }
`
const UserContainer = styled.div`
    display: flex;
    justify-content: flex-end;
        @media (max-width: 480px) {
            width: 135px;
        }
`
const Title = styled.h1`
    color: #FF6060;
    font-weight: 500;
`
const Location = styled.h3`
    color: #FF6060;
    font-weight: 400;
    margin-top: -20px;
`
const Hostname = styled.h4`
    color: #FF6060;
    font-weight: 500;
    width: 100px;
    font-size: 1.1em;
`

const Hostpicture = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-top: 15px;
`



class Informations extends React.Component {
    render() {
        return (
            <MainContainer>
                <div>
                    <Title>{this.props.title}</Title>
                    <Location>{this.props.location}</Location>
                    <Tagbar 
                        tags={this.props.tags}
                    />
                </div>
                <SecondContainer>
                    <UserContainer>
                        <Hostname>{this.props.hostname}</Hostname>
                        <Hostpicture src={this.props.hostpicture} alt="" />
                    </UserContainer>
                    <Rating
                        rating={this.props.rating}
                    />
                </SecondContainer>
            </MainContainer>
        )
    }
}

export default Informations