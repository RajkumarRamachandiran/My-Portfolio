import './App.css';
import { About } from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import Contact from './components/contact';
import Footer from './components/footer';
import Hero from './components/hero';
import Project from './components/project';

function App() {
  return (
    <div className="App">
       <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      {/* <Resume/> */}
      <Contact/>
      <Footer/>

      
    </div>
  );
}

export default App;
