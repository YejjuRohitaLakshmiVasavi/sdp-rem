import React,{useState} from 'react' 
import f2 from './Images/apb.jfif'
import f1 from './Images/vpb.jfif'
import f3 from './Images/cpb.jpg'
import { Button, Card } from '@mui/material'
import Villa from './Villa'
import Apartment from './Apartment'
import Community from './Community' 

function Building() {
    const [resourceType,setResourceType]=useState('')
  return (
    <>
    <h3> <li>Buildings</li> </h3>
    <div sx={{float:'left'}}>
       <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
       <h5>{<img src={f1} width="200" height="150"/>}<br/>Model Number:1<br/>Model Name:Villa<br/>price:Rs. 40,000/- per sqm<br/></h5>
       <Button variant="outlined" onClick={()=>setResourceType(<Villa/>)}>Buy Now</Button><br></br>
       </Card>
       <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
       <h5>{<img src={f2} width="200" height="150"/>}<br/>Model Number:2<br/>Model Name:Apartment<br/>price:Rs. 30,000/- per sqm<br/></h5>
       <Button variant="outlined" onClick={()=>setResourceType(<Apartment/>)}>Buy Now</Button><br></br>
       </Card>
       <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
       <h5>{<img src={f3} width="200" height="150"/>}<br/>Model Number:3<br/>Model Name:Community<br/>price:Rs. 35,000/- per sqm<br/></h5>
       <Button variant="outlined" onClick={()=>setResourceType(<Community/>)}>Buy Now</Button><br></br>
       </Card>
 <br/>
  </div>
  <br/>
  {resourceType}
  <br/>
  </>
  )
}

export default Building