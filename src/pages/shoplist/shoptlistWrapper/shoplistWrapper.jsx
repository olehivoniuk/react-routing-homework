import Sidebar from '../sidebar/sidebar'
import MainMenu from '../mainMenu/mainMenu'
import Navbar from '../../../components/navbar/navbar'
import './wrapper_styles.css'


const ShoplistWrapper = () => {
  return (
    <div className='wrapper'>
      
        <Sidebar  />
        <MainMenu />
    </div>
  )
}

export default ShoplistWrapper
