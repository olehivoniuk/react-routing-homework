import SectionMain from '../sectionMain/sectionMain'
import SidebarMain from '../sidebarMain/sidebarMain'
import './catalogWrapper-styles.css'

const CatalogWrapper = () => {
  return (
    <div className='catalog-wrapper'>
      <SidebarMain/>
      <SectionMain />
    </div>
  )
}

export default CatalogWrapper
