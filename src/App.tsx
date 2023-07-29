import React from 'react';
import './App.css';
import {MainCard} from "./components/MainCard";
import {Image} from "./components/Image";
import {Title} from "./components/Title";
import {Clause} from "./components/Clause";

function App() {
  return (
    <div>
      <MainCard>
            <Image></Image>
          <Title>Headline</Title>
          <Clause>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Clause>
      </MainCard>
    </div>
  );
}

export default App;
