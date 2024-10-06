import { useState } from "react";
import "./sass/app.scss";
import Create from "./components/Create";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Manage from "./components/Manage";
import Maintain from "./components/Maintain";
import Schedule from "./components/Schedule";
import Grow from "./components/Grow";
import Faster from "./components/Faster";
import Write from "./components/Write";

function App() {
  return (
    <div className="wrapper">
      <Social />
      <Manage />
      <Maintain />
      <Schedule />
      <Grow />
      <Faster />
      <Create />
      <Write />
      <Footer />
    </div>
  );
}

export default App;
