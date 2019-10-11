import React from 'react';
import './header.css';

const Header = () => {
    return (

        
        <nav>
            <h1>
                ¡HALA MADRID!
            </h1>
            <div className="menu">
            <ul>
                <li><a href="#">Inicio</a></li>
				<li><a href="#">Acerca de</a></li>
				<li><a href="#">Contacto</a></li>
                
            </ul> 

            </div>
               
        </nav>
    )
}

export default Header;