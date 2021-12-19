import React from 'react';
import styled from 'styled-components';
import chevron from "../../assets/chevron.svg"

const MainDiv = styled.div`
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
`
const TitleDropdown = styled.div`
    background-color: #FF6060;
    height: 23px;
    color: white;
    padding-left: 5px;
    padding-top: 5px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`
let TextDropdown = styled.div`
    background-color: #F6F6F6;
    color: #FF6060;
    line-height: 1.5em;
    padding-top: 1em;
    padding-bottom: 0.5em;
    padding-left: 1em;
    display: none;
`

let Chevron = styled.img`
    width: 1.4em;
    margin-right: 10px;
    margin-bottom: 5px;
`
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        // On déclare l'état initial de isOpen (fermé par défaut)
            this.state = {
                isOpen: false
            };
        }
        // Cette fonction, quand déclenchée, change le booléen par son opposé, false devient true et inversement
    OpenDropdown() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        return (
            // On appelle la fonction OpenDropdown au clic sur le titre
            <MainDiv>
                <TitleDropdown onClick={() => this.setState([ this.OpenDropdown()])}>
                    {this.props.title} <Chevron style={{transform: this.state.isOpen ? "rotate(180deg)" : "none"}} src={chevron} alt="" />
                </TitleDropdown>
                <TextDropdown style={{display: this.state.isOpen ? "block" : "none"}}>
                    {this.props.text}
                </TextDropdown>
            </MainDiv>
        );
    }
}

export default Dropdown