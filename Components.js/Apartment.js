import React from 'react'
import { Button, Card } from '@mui/material'
import f1 from './Images/ap1.jfif'
import f2 from './Images/ap2.jfif'

function Apartment() {
  return (
    <div>
        <div sx={{float:'left'}}>
          <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
          <h5>{<img src={f1} width="200" height="150"/>}<br/>Model Number:1<br/>Model Name:Apartment1<br/>price:Rs. 30,000/- per sqm<br/></h5>
          <Button variant="outlined" >Buy Now</Button><br></br>
          </Card>
          <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
          <h5>{<img src={f2} width="200" height="150"/>}<br/>Model Number:1<br/>Model Name:Apartment2<br/>price:Rs. 30,000/- per sqm<br/></h5>
          <Button variant="outlined">Buy Now</Button><br></br>
          </Card>
          </div>
    </div>
  )
}

export default Apartment