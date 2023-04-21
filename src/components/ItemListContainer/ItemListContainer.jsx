import React, { useEffect, useState } from 'react';
import {ImSpinner3} from 'react-icons/im';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import './itemlistcontainer.css';
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) => {

const [items, setItems] = useState([])

const [loading, setLoading] = useState(false)

//const param = useParams()

const {categoryId} = useParams()



/*establecemos funcion para obtener productos
const pedirProductos = () => {
  return new Promise ((resolve, reject) =>{
    setTimeout(() =>{
      resolve(stock)
      reject("Rechazado")
    }, 2000)
  })
}*/


useEffect(() =>{
// iniciamos el efecto montaje, con un loading en "true"
    setLoading(true)
    pedirProductos()
    .then((res) =>{
      // imprimimos la respuesta y l aguardamos en el hook
      if(categoryId){
        setItems(res.filter(prod => prod.category === categoryId))
      }else{
        setItems(res)
      }
        
      //console.log(res)
    })
    // consologuemos errore
    .catch((error) => console.log(error))
    .finally(() =>{setLoading(false)})


}, [categoryId])


  return (
    <>
    {/*nuestro componente arranca con el loading en "true" y cuando resuelve imprime en pantalla todo nuestro componente itemlist (donde mapeamos cada uno de los productos*/}
      {
        loading
        ?<ImSpinner3/>
        :<ItemList productos={items}/>
      }
    </>
    
  )
}