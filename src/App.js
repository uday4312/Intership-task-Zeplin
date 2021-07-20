import './App.css';
import Navbar from './component/Nav';
import Mainbody from './component/Mainbody';
import Rectangle1 from './component/Rectangle1';
import Rectangle2 from './component/Rectangle2';
import Rectangle3 from './component/Rectangle3';
import Rectangle4 from './component/Rectangle4';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mainbody/>
      <Rectangle1/>
      <Rectangle2/>
      <Rectangle3/>
      <Rectangle4/>
      <Footer/>
    </div>
  );
}

export default App;
