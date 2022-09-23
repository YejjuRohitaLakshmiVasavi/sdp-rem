import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Navbar from './Components.js/Navbar';
import {  Routes,Route } from 'react-router'; 
import Land from './Components.js/Land';
import Building from './Components.js/Building';
import Aboutus from './Components.js/Aboutus';
import Login from './Components.js/Login';
import More from './Components.js/More';
import Register from './Components.js/Register';
import { Card } from '@mui/material';

function App() {
  const [studName,setName]=useState("");
  const [studNumber,setNumber]=useState(0);
  const [studList,setStudList]=useState([]);
const [upName,setUpName]=useState("");
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setStudList(response.data);
    })
   axios.get("/search").then((response)=>{      setStudList(response.data);    })
  },[]);
  const addToList=()=>{
    axios.post("/newstud",{studName:studName, studNumber:studNumber,});
    console.log(studName,studNumber);
  }
  const updateName=(id)=>{
    axios.put("/upstud",{id:id,upName:upName,});
  }
  const deleteStud=(id)=>{
    axios.delete(`/delstud/${id}`);
    
  }
  return (
    <div className="App" >
        <h1>Agent search app</h1>
<label>Agent Name</label><br/>
<input type="text"
onChange={(event)=>setName(event.target.value)}/><br/>
<label>Agent Regd. No.</label><br/>
<input type="number"
onChange={(event)=>setNumber(event.target.value)}/><br/>
<button onClick={addToList}>New Student</button>
    <h1>Agent List</h1>
    {studList.map((val,key)=>{
  return <div key={key} class="student">
    <center>
    <Card sx={{ width: 345 ,height:250,float:'center',backgroundColor: "whitesmoke"}}>
    <h1>{val.name}</h1>
    <h1>{val.htno}</h1>
  <input type="text" onChange={(event)=>setUpName(event.target.value)} placeholder='Enter Name to Update'/>&nbsp;
  <button onClick={()=>updateName(val._id)}>Update Name</button><br/>
  <button onClick={()=>deleteStud(val._id)}>Delete</button>
  </Card>
  </center>
  </div>
  })}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Goto" element={<Navbar/>}/>
          <Route path="/Land" element={<Land/>}/> 
          <Route path="/Building" element={<Building/>}/> 
          <Route path="/Aboutus" element={<Aboutus/>}/> 
          <Route path="/More" element={<More/>}/>
        </Routes>
    </div>
  );
}

export default App;
