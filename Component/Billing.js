import React,{useState} from 'react';
import {Box,Card, CardContent, Container, TextField} from '@mui/material'
import './Billing.css';

export default function Bill()
{
    const [input,setInput] = useState('');

    const handleInput = (event)=>{
        setInput(event.target.value);
    };
    return(
        <Container maxWidth="sm" sx={{ backgroundColor:'skyblue',marginTop:'4cm' }} className='container'>
          <CardContent>
            <Card>
                <h5 className='quan'>Quantities Required  :
                <TextField id="standard-basic"variant="standard" value={input}
                 onChange={handleInput}
                  style={{display:'inline'}}/></h5>
                <h5 className='total'>Total Amount :<TextField id="standard-basic"variant="standard" value={input} style={{display:'inline',marginRight:'3cm'}}/></h5>
            </Card>
          </CardContent>
      </Container>
    )
}