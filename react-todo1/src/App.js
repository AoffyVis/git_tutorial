import './App.css';
import Navbar from '../src/Navbar/Navbar'
import Header from '../src/Header/Header'
import About from '../src/About/About'
import Skills from '../src/Skills/Skills'
import MyProject from '../src/Myproject/MyProject'
import Footer from '../src/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <Header/>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skills/>
      </div>
      <div>
        <MyProject />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
