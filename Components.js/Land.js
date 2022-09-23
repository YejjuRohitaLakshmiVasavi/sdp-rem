import React,{useState} from 'react' 
import f1 from './Images/gfe.jfif'
import f3 from './Images/dfe.jpg'
import f2 from './Images/dfe.jfif'
import { Button, Card } from '@mui/material'
import Landg from "./Landg"
import Landd from './Landd'
import Landp from './Landp'

function Land() {
    const [resourceType,setResourceType]=useState('') 
  return (
    <>
    <div>        
       <h3> <li>Land</li> </h3>
        <div sx={{float:'left'}}>
          <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
          <h5>{<img src={f1} width="200" height="150"/>}<br/>Model Number:1<br/>Model Name:Green Land<br/>price:Rs. 40,000/- per sqm<br/></h5>
          <Button variant="outlined" onClick={()=>setResourceType(<Landg/>)}>Buy Now</Button><br></br>
          </Card>
          <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
          <h5>{<img src={f2} width="200" height="150"/>}<br/>Model Number:2<br/>Model Name:Dry Land<br/>price:Rs. 30,000/- per sqm<br/></h5>
          <Button variant="outlined" onClick={()=>setResourceType(<Landd/>)}>Buy Now</Button><br></br>
          </Card>
          <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
          <h5>{<img src={f3} width="200" height="150"/>}<br/>Model Number:3<br/>Model Name:Plots<br/>price:Rs. 35,000/- per sqm<br/></h5>
          <Button variant="outlined" onClick={()=>setResourceType(<Landp/>)}>Buy Now</Button><br></br>
          </Card>    
     </div>
    </div>
    {resourceType}
    </>
  )
}

export default Land