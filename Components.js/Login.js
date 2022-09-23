import React,{useState} from 'react' 
import back from "./Images/back.jpg"
import TextField from '@mui/material/TextField';
import { Avatar, Button, Card, Checkbox, Link,FormControlLabel } from '@mui/material';
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  return (
    <>
    <div style={{ 
      backgroundImage: `url(${back})` ,height: "900px", backgroundRepeat: "no-repeat"}}>
        <center>
          <div  sx={{fontStyle: "cursive"}}>
          <h1 style={{ color: "white" }}>Welcome to REM WEbsite</h1>
        <h3 style={{ color: "white" }}>LOG IN</h3></div>
        <Card sx={{ width: 445 ,height:350,float:'center',backgroundColor: "whitesmoke"}}>        
        <Avatar></Avatar><br></br>
        <TextField id="outlined-basic" label="User name" variant="outlined" /><br></br><br></br>
        <TextField id="outlined-password-input"label="Password"  type="password" autoComplete="current-password" /><br></br><br></br>
        <FormControlLabel value="female" control={<Checkbox />} label="Remember Me" /><br></br>
        <Button variant="contained" onClick={() => navigate("/Goto")}>Log In</Button><br></br>
        <Link><Button  onClick={() => navigate("/Register")}>Create an Account</Button></Link>
        </Card></center>
    </div>
    </>
  )
}

export default Login