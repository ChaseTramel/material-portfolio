import './App.css';
import Container from "@mui/material/Container"
import Header from './components/Header.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <Container sx={{height: "100vh"}}>
      <Header />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
