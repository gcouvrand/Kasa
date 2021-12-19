import React from "react";
import styled from "styled-components";

const Tag = styled.span`
    font-size: 0.9em;
    background-color: #FF6060;
    color: white;
    margin-right: 10px;
    border-radius: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 15px;
    padding-right: 15px;
    display: inline-block;
    margin-bottom: 10px;
`

class Tagbar extends React.Component {
    render() {
        /* Grâce à la méthode map, on itère à travers un tableau, ici pour créer des éléments 
        <li> contenant chacun des éléments du tableau en leur adjoignant une key, nécessaire 
        dans ce cas dans React */
        const tagList = this.props.tags.map((item, index)  => <Tag key={`${item}-${index}`}> {item} </Tag>)
        return (
            <div>
                {tagList}
            </div>
        )
    }
}

export default Tagbar