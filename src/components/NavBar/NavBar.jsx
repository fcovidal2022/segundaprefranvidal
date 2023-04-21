import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div className="menu">
            {/*<p>Ecommerce</p>
            <p>Enlace 1</p>
            <p>Enlace 2</p>
            <p>Enlace 3</p> */}

            <Link className='link' to="/">Superbazar</Link>
            <Link className='link' to='/productos/electrodomestico'>Electrodomesticos</Link>
            <Link className='link' to='/productos/ropa'>Ropa</Link>
            <Link className='link' to='/counter'>Contador</Link>
            <Link className='link' to='/pika'>Pokemones</Link>
            <Link className='link' to='/cart'><CartWidget/></Link>
            
        </div>
    )
}