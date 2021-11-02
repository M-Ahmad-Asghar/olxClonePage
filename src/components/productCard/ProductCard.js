import React from 'react'
import './ProductCard.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function ProductCard() {
  return (
    <div  className='card'>
    <Card  className='cardBox'>
     
     <span className='featured'> FEATURED </span>
      <FavoriteBorderIcon className='fvrtIcon' />
      <div className='cardImgContainer'><Card.Img variant="top" src="https://images.olx.com.pk/thumbnails/190396715-400x300.webp" className='cardImg' /></div>
      <Card.Body className="body">
        <Card.Title className="cardTitle">{`RS 899`}</Card.Title>
        <Card.Text className="cardDetails">
          {`Some quick example text to build on the card title and make up the bulk of
          the cards content`}
        </Card.Text>
        <div className="lastSec">
        <span className="cardAddress" >Office Address : Main Shah Faisal Chowk, Opposite KING SUPER MART,</span>
        <span className="cardTime" >{`2 weeks ago`}</span>
</div>
       
      </Card.Body>
    
    </Card>
    </div>
  )
}
