import React, { useEffect, useContext} from "react";

import { Header } from "./components/Header/Header";
import { ThemeContext } from "./Context/theme";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

import Aos from "aos";
import "./App.css";

// functional component App serves as the root component of the app
// imports and renders multitude of other components from different files
export default function App() {
// also imports 'ThemeContext' from theme.jsx file which is used to manage the theme throughout the app
  const [{ themename }] = useContext(ThemeContext);

// Animate on Scroll is library used to animate elements as they appear on screen
// hook used to initialize the AOS library with a duration of 1500ms. 
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
      {/*some rendered components are placed within a section tags with their own id and it comes to play with my toggle function  */}
        <Header />
      </section>
      <main>
        <About />
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}