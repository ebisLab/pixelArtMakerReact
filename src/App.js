import './App.css';
import React, {useState, useEffect} from 'react'
import Grid from './components/Grid';
import ColorPicker from './components/Colorpicker'
import useStyles from './App.styles'


const offCell={
  on:false,
  color: "yellow",

}


function App() {

  const [val, setVal]=useState({
    width:'',
    height:''
  })
  const [val2, setVal2]=useState()
  const [forceRerender, setForceRerender] = useState(false);
  useEffect(() => {
setVal2(val2)
setForceRerender(false);
  }, [val2, val, forceRerender])

  const initialCells = Array.from({length:100},()=>offCell)
  const [cells, setCells]=useState(initialCells)
  const [currentColor, setCurrentColor] = useState("#56bc58");
  const classes= useStyles();

  const setNewVal=(e)=>{
    e.preventDefault()
    setVal2(val)
    setCells(Array.from({length:val.width*val.height},()=>offCell))
    setForceRerender(true);
  }


  return (
    <div className="App">
    <h1>Pixel Art Maker</h1>
    <form onSubmit={setNewVal}>
        Grid Width: 
              <input 
              value={val.width} 
              placeholder="width"
              name="width"
              type="number"
              onChange={(e)=>(setVal({...val, [e.target.name]: e.target.value})
              )}/>
              Grid Height:
              <input 
              value={val.height} 
              placeholder="height"
              name="height"
              type="number"
              onChange={(e)=>(setVal({...val, [e.target.name]: e.target.value})
              )}/>
              <button>submit</button>
      </form>
    <div className={classes.app}>

   
      <ColorPicker  currentColor={currentColor} onSetColor={setCurrentColor} 
      />
         <div className={classes.colorSwatchContainer} style={{height:"60px"}}>

           {[...new Set(cells.filter((cell)=>cell.on).map((cell)=>cell.color))].map((color,i)=>
           <div key={i} onClick={()=>setCurrentColor(color)} className={classes.colorSwatch} style={{background: color}}></div>
         )}
         </div>
{ !forceRerender && val2 && <Grid 
          val2={val2}
          currentColor={currentColor}
          cells={cells}
          setCells={setCells}
           />
           }
    </div>
    </div>

  );
}

export default App;
