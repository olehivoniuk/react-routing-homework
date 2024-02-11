import Sidebar from '../sidebar/sidebar'
import MainMenu from '../mainMenu/mainMenu'
import './wrapper_styles.css'


const Wrapper = () => {
  return (
    <div className='wrapper'>
        <Sidebar />
        <MainMenu />
    </div>
  )
}

export default Wrapper
