
import React from 'react'
import useStyles from '../ColorPicker.styles'

export default function Colorpicker({currentColor, setCurrentColor}) {
    const classes = useStyles(
        // {currentColor}
        )

    const colorChange=(e)=>{
        console.log(e.target.value)
        setCurrentColor(e.target.value)
    }

    return (
        <input 
        className={classes.colorPicker}
        type="color"
        value={currentColor}
        onChange={colorChange}
        />
    )
}
