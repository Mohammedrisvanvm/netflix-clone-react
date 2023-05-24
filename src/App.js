
import React from "react";
import NavBar from "./components/navbar/navbar";
import './App.css'
import Banner from "./components/banner/Banner";
import MainPost from "./components/MainPost/MainPost";
import { Action, Comedy, Horror_Movies, Originals, Romantic } from "./urls";

function App() {
  return (
    <div className="App" >
     <NavBar/>
     <Banner/>
     <MainPost title='Netflix Originals' url={Originals}/>
     <MainPost title='Action' isSmall url={Action}/>
     <MainPost title='Comedy' isSmall url={Comedy}/>
     <MainPost title='Romantic Movies' isSmall url={Romantic}/>
     <MainPost title='Horror Movies' isSmall url={Horror_Movies}/>
     
    </div>
  );
}

export default App;
