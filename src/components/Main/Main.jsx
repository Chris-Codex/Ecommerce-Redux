import React from 'react'
import Navbar from '../Navbar/Navbar'
import NavigateButtons from '../NavButtons/NavigateButtons'
import Slider from '../Slider/Slider'

const Main = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <NavigateButtons />
    </div>
  )
}

export default Main