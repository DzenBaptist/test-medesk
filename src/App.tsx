import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
        <Card title = "Lorem." text="
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur, deserunt dolorem ducimus facere libero nobis numquam possimus ratione veniam voluptates voluptatum." />
        <Card title="Lorem ipsum dolor." text="
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet animi aperiam, consequuntur distinctio dolores, facere necessitatibus odit quibusdam ratione rem sint suscipit unde voluptates!"/>
        <Card title="Lorem ipsum." text="
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, consequuntur cumque debitis dolore est ipsum, non, obcaecati perferendis quos sit soluta veritatis. Aliquid, deleniti dolorem dolorum ea eaque natus necessitatibus nobis odio quis! Delectus ex praesentium quas sunt voluptatibus."/>
        <Card />
    </div>
  );
}

export default App;


