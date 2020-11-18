
import React from 'react'
import useStyles from '../ColorPicker.styles'

export default function Colorpicker({currentColor, onSetColor, setCurrentColor}) {
    const classes = useStyles()

    const colorChange=(e)=>{
        onSetColor(e.target.value)
    }

    return (<div style={{display:"inline-flex"}}>
        <input 
        className={classes.colorPicker}
        type="color"
        value={currentColor}
        onChange={colorChange}
        />
        </div>
    )
}
