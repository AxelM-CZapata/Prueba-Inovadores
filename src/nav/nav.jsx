import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './nav.css'

function Nav() {
  const [opciones, setOpciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('http://localhost:3000/user');
        const opcionesData = response.data.map(e => e.descripcion);
        setOpciones(opcionesData);
      } catch (error) {
        console.error(error);
      }
    };


    fetchData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
      <nav className='nav'>
        <ul className='ul'>
        <li className='fatherLi' onClick={toggleMenu}>{opciones[0]}</li>
        {
            isOpen && (
                <ul className='toggle'>
            {opciones.map((opcion, index) =>
                { if(index!==0)
                return <li className='desplegables' key={index}>{opcion}</li>}
                )}
                </ul>
            )
        }
          
        <li>Profile</li>
        <li>Messages</li>
        <li>Account Settings</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;