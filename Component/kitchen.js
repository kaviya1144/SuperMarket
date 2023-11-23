import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Veggie.css';

export default function Kitchen() {
  return (
    <div style={{backgroundImage:`url(https://img.freepik.com/free-photo/abstract-blur-shopping-mall_1203-8823.jpg?w=1060&t=st=1700588007~exp=1700588607~hmac=234ef69fe7527101241ccde89628d55b5beca0255878c2fce6e90b95c3b6a581)`}}>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 2,
            pb: 0,
          }}
        >
          <Container maxWidth="lg">
             <div className='t'>
                 <h4  style={{color:'black'}}>Kitchen Items<hr/></h4>
             </div>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             
            </Stack>
          </Container>
        </Box>
      </main>
<div className='wrapper'>
        <Card1
        img="https://m.media-amazon.com/images/I/71ZmmLW97YL._SX679_.jpg"
        title="CELLO Checkers Pet Plastic Airtight Canister Set"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/41hlhJ58m5L._SX300_SY300_QL70_FMwebp_.jpg"
        title="Cello Sportigo Plastic Bottle Set Fridge water bottle"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://www.bigbasket.com/media/uploads/p/l/40112159_9-srushti-gold-aluminium-pressure-cooker-outer-lid.jpg?tr=w-640,q=80"
        title="Srushti Gold Aluminium Outer Lid Pressure Cooker, 5 L"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/41NOqIn14IL._SX300_SY300_QL70_FMwebp_.jpg"
        title="Opalware Dazzle Series Tropical Lagoon Dinner Set Light-Weight"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/41YiLfo76VL._SX300_SY300_QL70_FMwebp_.jpg"
        title="Butterfly Premium Vegetable Chopper 900 Ml, Blue"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/31r6OJquN5L._SY300_SX300_QL70_FMwebp_.jpg"
        title="Milton Duo DLX 1000 Thermosteel 24 Hours Hot and Cold Water Bottle"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/510yXR4GoNL._SX679_.jpg"
        title="Pigeon Aluminium Nonstick Duo Pack Flat Tawa 250 and Fry Pan 200 Gift Set"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/41v4jJLQO4L._SX300_SY300_QL70_FMwebp_.jpg"
        title="MILTON Executive Lunch Insulated Tiffin, 2 Round Containers, 280 ml Each, 1 Oval Container"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/81l4s3TMV6L._SX679_.jpg"
        title="Amazon Brand - Solimo Stainless Steel Dish Drainer with Drain Tray + Cutlery Stand"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/71CzD+eRG3L._SX679_.jpg"
        title="Instant Pot Duo Plus 6 Litre, Stainless Steel 9-in-1 Electric Pressure Cooker"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/41H8Ae-loUL._SX300_SY300_QL70_FMwebp_.jpg"
        title="CAROTE Non Stick Cookware Set, Induction Set Combo, Set of 4"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/51JfYMrIfVL._SX679_.jpg"
        title="The Indus Valley Triply Stainless Steel Kadai|Medium "
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/71oZ1-QYomL._SX679_.jpg"
        title="amazon basics Aluminium Non-Stick Black Cookware"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/71bOuMy7eXL._SX679_.jpg"
        title="Amazon Brand-Solimo 15-in-1 Vegetable and Fruit Chopper"
        price="₹"
        value=""
        stock=""/>
        <Card1
        img="https://m.media-amazon.com/images/I/516d5S4iLtL._SX300_SY300_QL70_FMwebp_.jpg"
        title="VOLTURI Fridge Storage Boxes (Pack of 6), Fridge Organizer "
        price="₹"
        value=""
        stock=""/>
       
        </div>
    </div>
  );
}

function Card1(props)
{
    return(
    <div className='card'>
    <Card sx={{maxWidth: 345,padding:1 }}>
  <CardMedia className="image"image={props.img}
    sx={{height: 250}}
  />
  <CardContent>
    <p className='title'>{props.title}</p>
    <p className='value'>Quantity:{props.value}</p>
    <p className='stock'>Stocks Available:{props.stock}</p>
  </CardContent>
  <CardActions>
    <Button variant="outlined" className='button'>MRP{props.price}</Button>
    <Button variant="outlined" className='cart'>Add to cart</Button>
    </CardActions>
  </Card>
  </div>
    );
}