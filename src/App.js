import React from "react";
import Header from "./components/Header";
import Section from "./components/Project";
import Navigation from "./components/Navigation";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Section />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
