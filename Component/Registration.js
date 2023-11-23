//  import React from "react";
//  import { Box,Button, TextField } from "@mui/material";
//  export default function Form(){
//      return(
//      <Box sx={{fontStyle:"oblique",alignItems:"center",display:"flex", flexDirection:"column", margin:"normal",padding:"70px"}}>
//          <h1>Register</h1><br/>
//          <TextField required label="Name" variant="outlined"sx={{height:70,width:300}}/><br/>
//          <TextField label="Username (optional)" variant="outlined" sx={{height:70,width:300}}/><br/>
//          <TextField required label="Email" variant="outlined" sx={{height:70,width:300}}/><br/>
//          <TextField type="password" label="Password " variant="outlined"sx={{height:70,width:300}}/><br/>
//          <TextField type="password" label="Confirm Password" variant="outlined" sx={{height:70,width:300}}/><br/>
//          <Button variant="outlined" sx={{color:'green',backgroundColor:'lightgreen'}}>SUBMIT</Button>
//      </Box>    
//      )
// }


import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming your JSON server endpoint for users is '/users'
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log('User registered successfully:', response.data);
      // Handle success (e.g., redirect user, show a success message)
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </label>

      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;