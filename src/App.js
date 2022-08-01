import logo from "./logo.svg";
import "./App.css";
import { Article, Brand, CTA, Navbar } from "./components/index.js";
import {
  Possibility,
  Footer,
  Blog,
  Feature,
  WhatGPT3,
  Header,
} from "./containers/index";

function App() {
  return (
    <div className="App">
      <div className="gradiant__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
