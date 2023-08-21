import logo from './logo.svg';
import Navbar from './components/Navbar'
import Classify from './components/Classify'
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/urban-sound-classifier" element={<Classify/>} />
          <Route path="/urban-sound-classifier/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
