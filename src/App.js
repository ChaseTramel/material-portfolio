import './App.css';
import Container from "@mui/material/Container"
import Header from './components/Header.js';
import About from './components/About.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <Container sx={{height: "100vh"}}>
      <Header />
      <About />
      <Projects />
    </Container>
  );
}

export default App;
