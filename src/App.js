
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="content">
      </div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Body/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
