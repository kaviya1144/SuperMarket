 import {Link} from 'react-router-dom';
 import { TextField,Button,Box } from '@mui/material';
import Form from './Registration';
import { Route,Routes } from 'react-router-dom';
import './Login.css';
 export default function Login(){
     return(
         <Box className="form" sx={{fontStyle:"oblique",flexDirection:"column",display: "flex",alignItems:"center",padding:"150px"}}>
             <h1>Sign In</h1>
              <TextField required margin="normal" id="email" label="Email" variant="outlined" sx={{width:300}}/>
              <TextField required margin="normal" id="password" label="Password" variant="outlined" sx={{width:300}}/><br/>
              <Button variant="outlined" sx={{width:150,color:'green',backgroundColor:'lightgreen'}}>Sign In</Button><br/>
              <Link to='/'>Forgot Password?</Link>
              <small>"Don't have an account?"<Link to="/register">Sign Up</Link>
              <Routes>
                <Route exact path='/register' element={<Form/>}/>
              </Routes>
              </small>
         </Box>
     )
}

