import React from 'react'
 
const ColorsList = ({ colors }) => {
    return(
        <div className='box'>
                {colors.map((colors, index)=><h1 className={colors} key = {index}>{colors}</h1> )}
        </div>
    )
}
export default ColorsList