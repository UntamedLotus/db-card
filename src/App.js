import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import MainContent from "./components/mainContent/mainContents";

function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
