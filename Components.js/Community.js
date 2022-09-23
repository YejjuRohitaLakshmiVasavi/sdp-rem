import React from 'react'
import { Button, Card } from '@mui/material'
import f1 from './Images/com1.jfif'
import f2 from './Images/com2.jfif'

function Community() {
  return (
    <div>
    <div >
      <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={f1} width="200" height="150"/>}<br/>Model Number:1<br/>Model Name:Community1<br/>price:Rs. 35,000/- per sqm<br/></h5>
      <Button variant="outlined" >Buy Now</Button><br></br>
      </Card>
      <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
      <h5>{<img src={f2} width="200" height="150"/>}<br/>Model Number:1<br/>Model Name:Community22<br/>price:Rs. 35,000/- per sqm<br/></h5>
      <Button variant="outlined">Buy Now</Button><br></br>
      </Card>
      </div>
</div>
  )
}

export default Community