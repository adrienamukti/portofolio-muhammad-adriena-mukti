'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {

const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
  const theme = localStorage.getItem('theme');

  if (theme === 'dark') {
    setIsDarkMode(true);
    document.documentElement.classList.add('dark');
  } else {
    setIsDarkMode(false);
    document.documentElement.classList.remove('dark');
  }
}, []);

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}, [isDarkMode]);

  return (
    <main id="#top">
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Services isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
    </main>
  );
}
