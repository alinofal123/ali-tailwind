import './App.css';
import Athour from './Athour';
import Navbar from './components/Navbar';
import Footer from './Footer';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Athour />
      <Footer />
    </div>
  );
}

export default App;
