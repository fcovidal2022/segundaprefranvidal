import React from 'react';
import './Item.css';
import {Card, Button} from 'react-bootstrap' 
import { Link } from 'react-router-dom';

export const Item = ({id, description, price, image, category}) => {
    //pasamos mediante props, cad apropiedad de nuestros productos (objetos) y lo colocamos por props en nuestro return
  return (
    /*<div>
        <h3>Id:{id}</h3>
        <p>Dscription:{description}</p>
        <p>Precio ${price}</p>
        <img src={image} alt={image} />       
    </div>
    */
    <div className='item'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>${price}</Card.Title>
        <Card.Title>Categoria: {category}</Card.Title>
        <Link to={`/detail/${id}`}>
        <Button variant="primary">Ver más detalles</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>

     )
}
