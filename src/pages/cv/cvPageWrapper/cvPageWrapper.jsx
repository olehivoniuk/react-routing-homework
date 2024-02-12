import React from 'react'
import CvMain from '../cvMain/cvMain'
import CvBarside from '../cvBarside/cvBarside'
import './cvPageWrapper-styles.css'

const CvPageWrapper = () => {
  return (
    <div className='cv-page-wrapper'>
        <CvBarside />
        <CvMain/>
    </div>
  )
}

export default CvPageWrapper
