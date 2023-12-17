import './App.css';
import Container from "@mui/material/Container"
import Header from './components/Header.js';
import About from './components/About.js';

function App() {
  return (
    <Container sx={{bgcolor: "#eff1f5", height: "100vh"}}>
      <Header />
      <About />
    </Container>
  );
}

export default App;
