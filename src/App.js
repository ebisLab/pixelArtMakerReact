import './App.css';
import React, {useState} from 'react'
import Grid from './components/Grid';
import ColorPicker from './components/Colorpicker'
import useStyles from './App.styles'


const offCell={
  on:false,
  color: "yellow",

}
const initialCells = Array.from({length:40},()=>offCell)

function App() {
  const [cells, setCells]=useState(initialCells)
  const [currentColor, setCurrentColor] = useState("#56bc58");
  // const [colorHistory, setColorHistory]=useState([])

  const classes= useStyles();
  // const onSetColor = (color)=>{
  //   const newcolors = colorHistory.slice(-6).concat(color)
  //   setColorHistory(newcolors)
  //   setCurrentColor(color)

  // }

  return (
    <div className={classes.app}>
      <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} 
      // setCurrentColor={setCurrentColor} 
      />
         <div className={classes.colorSwatchContainer}>

           {[...new Set(cells.filter((cell)=>cell.on).map((cell)=>cell.color))].map((color,i)=>
           <div key={i} onClick={()=>setCurrentColor(color)} className={classes.colorSwatch} style={{background: color}}></div>
         )}
         </div>
         
          <Grid 
          currentColor={currentColor}
          cells={cells}
          setCells={setCells}
           />
    </div>

  );
}

export default App;
