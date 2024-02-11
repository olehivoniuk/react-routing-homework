import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormImitationWrapper from './pages/form-imitation/FormImitationWrapper/formImitationWrapper';
import ShoplistWrapper from './pages/shoplist/shoptlistWrapper/shoplistWrapper';
import ButtonPage from './pages/assigment/buttonPage/buttonPage';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pages/ultimateWrapper' element={<FormImitationWrapper />} />
            <Route path='/pages/assigment/buttonPage' element={<ButtonPage />} />
            <Route path='/pages/wrapper/shoplistWrapper' element={<ShoplistWrapper />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
