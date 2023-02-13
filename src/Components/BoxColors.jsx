import React, { useState } from 'react'
import ColorsList from './ColorsList';
import InputsData from './InputsData';



const BoxColors = () => {
    const [colors, setColors] = useState([]);
  return (
    <div id='contenedor'>
        <InputsData colors={colors} setColors = {setColors}/>
        <ColorsList colors={colors} />

    </div>
  )
}

export default BoxColors;