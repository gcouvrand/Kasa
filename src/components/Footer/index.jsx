import logo from "../../assets/logo_white.png";
import styled from "styled-components";

const FooterBackground = styled.div`
    background-color: black;
    height: 135px;
    padding-top: 60px;
    margin-left: -6em;
    margin-right: -6em;
`

const FooterLogo = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`

const FooterText = styled.h3`
    color: white;
    font-weight: 300;
    text-align: center;
`

function Footer() {
    return (
        <FooterBackground>
            <FooterLogo src={logo} alt="logo" />
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterBackground>
    )
}

export default Footer