import React from 'react'
import Button from '../button/button'

const Home = () => {
  return (
    <div>
      <Button text="Regular Button" />
      <Button text="Danger Button" variant="danger" />
      <Button text="Success Button" variant="success" />
      <Button text="Small Button" size="small" />
      <Button text="Large Button" size="large" />
    </div>
  )
}

export default Home
