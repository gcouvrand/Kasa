import Banner from "../../components/Banner"
import Card from "../../components/Card"
import styled from "styled-components";
import banner from "../../assets/banner.png"
import data from "../../logements.json"
import React from "react";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px;
  background-color: #F6F6F6;
  margin-top: 50px;
  border-radius: 25px;
    @media (max-width: 480px) {
      padding: 0;
      margin-top: 20px;
    }
`

class Home extends React.Component {
  render() {
    const title= "Chez vous, partout et ailleurs";
  /* On itère avec la méthode map au sein du tableau pour créer autant de "Cards" que nécessaire
  et on utilise comme key l'id de chaque logement */
  return (
    <div>
      <Banner bannerImg={ banner } title= { title } />
      <MainContainer>
        {data.map((item) => (
          <Card
            key={item.id}
            cover={item.cover}
            title={item.title}
            id={item.id}
          />
        ))}
      </MainContainer>
   </div>
  )
}
}
export default Home