import React from 'react';
import {Card, Button} from 'react-bootstrap'; 
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({id, description, price, image, category}) => {
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
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>${price}</Card.Title>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio molestias quod illum odio, fugiat repellat minus commodi? Sit quae odio beatae porro eveniet incidunt dolores quisquam, exercitationem a ad aspernatur.</p>
        <Card.Title>Categoria: {category}</Card.Title>
        <ItemCount/>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </div>

     )
}