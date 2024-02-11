import Header from '../header/header'
import Main from '../main/main'
import Footer from '../footer/footer'
import './wrapper_styles.css'


const Wrapper = () => {
  return (
    <div className = 'custom-border square'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Wrapper
