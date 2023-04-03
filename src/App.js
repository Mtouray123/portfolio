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

export default function App() {
  const [{ themename }] = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
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