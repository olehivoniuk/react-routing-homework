import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormImitationWrapper from './pages/form-imitation/FormImitationWrapper/formImitationWrapper';
import ShoplistWrapper from './pages/shoplist/shoptlistWrapper/shoplistWrapper';
import ButtonPage from './pages/assigment/buttonPage/buttonPage';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import CatalogWrapper from './pages/catalog/catalogWrapper/catalogWrapper';
import NovelWrapper from './pages/novel/novelWrapper/novelWrapper';
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
            <Route path='/pages/catalog/catalogWrapper' element={<CatalogWrapper />} />
            <Route path='/pages/novel/novelWrapper' element={<NovelWrapper />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
