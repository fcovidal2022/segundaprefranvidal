import {stock} from '../data/stock'

export const pedirProductos = () => {
    //establecemos una nueva promesa que resuelva o rechace en un tiempo de 2 segundos nuestro stock
    return new Promise ((resolve, reject) =>{
      setTimeout(() =>{
        resolve(stock)
        reject("Rechazado")
      }, 2000)
    })}