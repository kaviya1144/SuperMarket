import React from 'react';
import './Vegetables.css';
import {CardContent,Button,Grid,Box, Container} from '@mui/material';

export default function Vegetables()
{
  return(
    <Container sx={{marginTop:'50px'}}>
       <Grid container spacing={2} marginLeft={28}>
        <Grid item xs={12} sm={4} style={{backgroundColor:'',marginRight:'35px',border:'1px solid'}}>
          <Box className="box">
            <CardContent className='main1'
            style={{backgroundImage:`url(https://tse3.mm.bing.net/th?id=OIP.JJhRCdcbDVHgd7cCnaz0_gHaEo&pid=Api&P=0&h=180)`,}}>
            </CardContent>

             <CardContent className='main'>
             <h4 className="vegname">Tomato</h4>
             <h5>Quantity : 1kg</h5>
             <h5>Price :$5</h5>
            <Button variant="outlined" style={{paddingRight:'100px'}}>Add to cart</Button>
            </CardContent>
          </Box>
        </Grid>
       <Grid item xs={12} sm={4} style={{backgroundColor:'', marginRight:'35px',border:'1px solid'}}>
            <Box>
            <CardContent className='main1'
             style={{backgroundImage:`url(https://tse2.mm.bing.net/th?id=OIP.-OtN2wX-08p2S7Rp_maC4AAAAA&pid=Api&P=0&h=180)`,}}>
             </CardContent>

             <CardContent className='main'>
            <h4 className="vegname">Potato</h4>
            <h5>Quantity : 1kg</h5>
            <h5>Price :$5</h5>
            <Button variant="outlined" style={{paddingRight:'100px'}}>Add to cart</Button>
             </CardContent>
          </Box>
        </Grid>
       <Grid item xs={12} sm={4} style={{marginTop:'20px',backgroundColor:'',marginRight:'35px',border:'1px solid'}}>
            <Box>
            <CardContent className='main1'
             style={{backgroundImage:`url(https://5.imimg.com/data5/FU/BG/MY-3870932/lady-finger-500x500.png)`,}}>
             </CardContent>

             <CardContent className='main'>
            <h4 className="vegname">Potato</h4>
            <h5>Quantity : 1kg</h5>
            <h5>Price :$5</h5>
            <Button variant="outlined" style={{paddingRight:'100px'}}>Add to cart</Button>
             </CardContent>
          </Box>
        </Grid>
       <Grid item xs={12} sm={4} style={{marginTop:'20px',backgroundColor:'',marginRight:'35px',border:'1px solid'}}>
            <Box>
            <CardContent className='main1'
             style={{backgroundImage:`url(https://tamil.boldsky.com/img/2023/05/cver-1684498960.jpg)`,}}>
             </CardContent>

             <CardContent className='main'>
            <h4 className="vegname">Ridge Gourd</h4>
            <h5>Quantity : 1kg</h5>
            <h5>Price :$5</h5>
            <Button variant="outlined" style={{paddingRight:'100px'}}>Add to cart</Button>
             </CardContent>
          </Box>
        </Grid>
       <Grid item xs={12} sm={4} style={{marginTop:'20px',backgroundColor:'',marginRight:'35px',border:'1px solid'}}>
            <Box>
            <CardContent className='main1'
             style={{backgroundImage:`url(https://tamil.boldsky.com/img/2013/08/17-bitter-gourd-3600.jpg)`,}}>
             </CardContent>

             <CardContent className='main'>
            <h4 className="vegname">Bitter Gourd</h4>
            <h5>Quantity : 1kg</h5>
            <h5>Price :$5</h5>
            <Button variant="outlined" style={{paddingRight:'100px'}}>Add to cart</Button>
             </CardContent>
          </Box>
        </Grid>
       <Grid item xs={12} sm={4} style={{marginTop:'20px',backgroundColor:'',marginRight:'35px',border:'1px solid'}}>
            <Box>
            <CardContent className='main1'
             style={{backgroundImage:`url(https://fastandfresh.in/cdn/shop/products/onionsambhar_800x.jpg?v=1655522645)`,}}>
             </CardContent>

             <CardContent className='main'>
            <h4 className="vegname">Onion</h4>
            <h5>Quantity : 1kg</h5>
            <h5>Price :$5</h5>
            <Button variant="outlined" style={{paddingRight:'100px'}}>Add to cart</Button>
             </CardContent>
          </Box>
        </Grid>
    </Grid>
</Container>


  );
}