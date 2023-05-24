
import React from "react";
import NavBar from "./components/navbar/navbar";
import './App.css'
import Banner from "./components/banner/Banner";
import MainPost from "./components/MainPost/MainPost";

function App() {
  return (
    <div className="App" >
     <NavBar/>
     <Banner/>
     <MainPost/>
    </div>
  );
}

export default App;
