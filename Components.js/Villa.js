import React from 'react'
import { Button, Card } from '@mui/material'
import f1 from './Images/villa1.jfif'
import f2 from './Images/villa2.jfif'

function Villa() {
  return (
    <div>
        <div>
            <br/>
        <h3><li>Select the Villa you want to buy</li></h3>
          <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
          <h5>{<img src={f1} width="200" height="150"/>}<br/>Model Number:1<br/>Model Name:Villa1<br/>price:Rs. 40,000/- per sqm<br/></h5>
          <Button variant="outlined" >Buy Now</Button><br></br>
          </Card>
          <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke",float:'left' }}>
          <h5>{<img src={f2} width="200" height="150"/>}<br/>Model Number:1<br/>Model Name:Villa2<br/>price:Rs. 40,000/- per sqm<br/></h5>
          <Button variant="outlined">Buy Now</Button><br></br>
          </Card>
          </div>
    </div>
  )
}

export default Villa