import React from 'react'
import NovelSidebar from '../novelSidebar/novelSidebar'
import NovelMain from '../novelMain/novelMain'
import './novelWrapper-styles.css'

const NovelWrapper = () => {
  return (
    <div className='novelwrapper'>
      <NovelSidebar/>
      <NovelMain />
    </div>
  )
}

export default NovelWrapper
