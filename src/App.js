import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './Component/Main';
import Nav from './Component/Nav';
import Aside from './Component/Aside';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
      <Nav/>
      <Aside/>
    </div>
  );
}

export default App;
