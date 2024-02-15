import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import routes from './routes/routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          {/* <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pages/ultimateWrapper' element={<FormImitationWrapper />} />
            <Route path='/pages/assigment/buttonPage' element={<ButtonPage />} />
            <Route path='/pages/wrapper/shoplistWrapper' element={<ShoplistWrapper />} />
            <Route path='/pages/catalog/catalogWrapper' element={<CatalogWrapper />} />
            <Route path='/pages/novel/novelWrapper' element={<NovelWrapper />} />
            <Route path='/pages/cv/cvPageWrapper' element={<CvPageWrapper />} />
          </Routes> */}

          <Routes>
            {routes.map(({ path, Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
