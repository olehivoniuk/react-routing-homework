import FormImitationWrapper from '../pages/form-imitation/FormImitationWrapper/formImitationWrapper';
import ShoplistWrapper from '../pages/shoplist/shoptlistWrapper/shoplistWrapper';
import ButtonPage from '../pages/assigment/buttonPage/buttonPage';
import Home from '../components/home/home';
import CatalogWrapper from '../pages/catalog/catalogWrapper/catalogWrapper';
import NovelWrapper from '../pages/novel/novelWrapper/novelWrapper';
import CvPageWrapper from '../pages/cv/cvPageWrapper/cvPageWrapper';



const routes = [
    { path: '/', Element: Home },
    { path: '/pages/ultimateWrapper', Element: FormImitationWrapper },
    { path: '/pages/wrapper/shoplistWrapper', Element: ShoplistWrapper },
    { path: '/pages/assigment/buttonPage', Element: ButtonPage },
    { path: '/pages/catalog/catalogWrapper', Element: CatalogWrapper },
    { path: '/pages/novel/novelWrapper', Element: NovelWrapper },
    { path: '/pages/cv/cvPageWrapper', Element: CvPageWrapper },
 ];

export default routes
