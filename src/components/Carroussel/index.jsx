import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 415px;
    margin-top: 20px;
    margin-bottom: 15px;
        @media (max-width: 480px) {
            height: 255px;
            margin-bottom: -10px
        }
`
const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`
const ArrowLeft = styled.svg`
    position: absolute;
    top: 40%;
    left: 10px;
    cursor: pointer;
        @media (max-width: 480px) {
            width: 1.5em;
            top: 35%;
        }
`

const ArrowRight = styled.svg`
    position: absolute;
    top: 40%;
    right: 10px;
    cursor: pointer;
    @media (max-width: 480px) {
        width: 1.5em;
        top: 35%;
    }
`

class Carroussel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }
    // Fonction qui permet d'avancer d'un cran dans le carroussel, et de revenir au début quand on clique
    // sur la dernière image
    nextPicture() {
        if (this.state.index === this.props.pictures.length - 1) {
            this.setState({ index: 0})
        } else {
            this.setState({index: this.state.index + 1})
        }
    }

    // Même fonction mais dans le sens inverse
    previousPicture() {
        if (this.state.index === 0) {
            this.setState({ index: this.props.pictures.length - 1})
        } else {
            this.setState({index: this.state.index - 1})
        }
    }

    render() {
        return (
                <Container>
                <ArrowRight onClick={()=> this.nextPicture()} width="48" height="80" viewBox="0 0 48 80" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                </ArrowRight>
                <ArrowLeft onClick={()=> this.previousPicture()} width="48" height="80" viewBox="0 0 48 80" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312V7.78312Z" fill="white"/>
                </ArrowLeft>

                <Img src={this.props.pictures[this.state.index]} alt = "" />
                </Container>

        )
    }
}

export default Carroussel 