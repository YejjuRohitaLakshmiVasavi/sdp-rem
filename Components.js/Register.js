import React from 'react'
import TextField from '@mui/material/TextField';
import { Avatar, Button, Card,Link, RadioGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';


function Register() {
  return (
    <div>
        <center> 
        <h2>Registration</h2>
        <Card sx={{ width: 445 ,height:700,backgroundColor: "whitesmoke"}}>
            <p>Please enter details</p>
            <Avatar></Avatar><br></br>
        <TextField  helperText="Please enter your name"  id="demo-helper-text-misaligned"  label="Name"/><br></br>
        <center>
        <RadioGroup ><h4>Gender</h4>
        <center>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" /></center>
        </RadioGroup></center>
        <TextField  helperText="Please enter your E-Mail"  id="demo-helper-text-misaligned"  label="E-mail"/><br></br><br></br>
        <TextField id="outlined-basic" label="User name" variant="outlined" /><br></br><br></br>
        <TextField id="outlined-password-input"label="Password"  type="password" autoComplete="current-password" /><br></br><br></br>
        <TextField id="outlined-password-input"label="Conform Password"  type="password" autoComplete="current-password" /><br></br><br></br>
        <Button variant="contained" >Register</Button><br></br>
        
        <Link>cancel</Link>
        </Card></center>
    </div>
  )
}

export default Register