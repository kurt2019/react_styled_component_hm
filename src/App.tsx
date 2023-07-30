import React from 'react';
import './App.css';
import {MainCard} from "./components/MainCard";
import {ImageForCard} from "./components/ImageForCard";
import {Title} from "./components/Title";
import {Clause} from "./components/Clause";
import {MainButton} from "./components/mainButton";

function App() {
  return (
    <div>
      <MainCard>
            <ImageForCard/>
          <Title>Headline</Title>
          <Clause>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Clause>
          <MainButton margin={"0 12px auto 22px"}> See more</MainButton>
          <MainButton color={"#4E71FE"} bgc={"#FFF"} border={"#4E71FE"}> Save</MainButton>
      </MainCard>
    </div>
  );
}
// margin,color,background-color, border-color
export default App;
