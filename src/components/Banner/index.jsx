import React from 'react';
import styled from "styled-components";

const BannerContainer = styled.div`
    position: relative;
    margin-top: 75px;
    text-align: center;
    background-color: black;
    border-radius: 35px;
    background-size: cover;
    height: 13vw;
    @media (max-width: 480px) {
        height: 28vw;
        border-radius: 10px;
        margin-top: 20px;
    }
`
const BannerImg = styled.img`
    border-radius: 35px;
    width: 100%;
    opacity: 0.7;
    object-fit: cover;
    height: 13vw;
    @media (max-width: 480px) {
        height: 28vw;
        border-radius: 10px;
    }
`
const BannerTitle = styled.h1`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 400;
    font-size: 2.5em;
    @media (max-width: 480px) {
        font-size: 1.3em;
        left: 10px;
        top: 10px;
        width: 55%;
        text-align: start;
        transform: none;
    }
`
class Banner extends React.Component {
    render() {
        return (
            <BannerContainer>
                <BannerImg src={this.props.bannerImg} alt={this.props.title} />
                <BannerTitle>{this.props.title}</BannerTitle>
            </BannerContainer>
        )
    }
}

export default Banner