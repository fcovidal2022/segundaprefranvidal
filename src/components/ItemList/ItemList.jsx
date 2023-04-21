import React from 'react'
import './itemList.css'
import {Item} from '../Item/Item'

export const ItemList = ({productos=[]}) => {
  return (

    //pasamos mediante props todo el array a este componente y mapeamos casa item de los objetos y los recorremos con el spread operador
        <div className='container'>
        <h3>Nuestros productos</h3> 
           
      <hr />
      <div className='fila'>
      {productos.map((item) => <Item {...item} key={item.id}/>)}
      </div>
        
    </div>
  )
}
