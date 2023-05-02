import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Pag404 } from './pages/404';

function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <Banner/> */}
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Pag404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
