import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reminders from "./components/Reminders";

function App() {
  return (
    <div className="App">
        <Header/>
        <Reminders/>
        <Footer/>
    </div>
  );
}

export default App;
