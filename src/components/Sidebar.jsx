import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);

const navigate = useNavigate()

const product = (e)=>{
e.preventDefault();
  navigate('/products')
}

const Statistics = (e)=>{
  e.preventDefault();
    navigate('/Statistics')
  }

const abrir = (e)=>{
  e.preventDefault();
  setShowModal(true)
  }

  return (
    <div className="container-padre">

      {/* sliderbar */}
      <div className='sidebar uno'>
        <img className='sidebar-logo' src={`https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png`} alt="" />
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'><a href="#"><i className='bx bx-home-alt'></i>Home</a></li>
          <li className='sidebar-list-item'><a onClick={abrir} href=""><i className='bx bx-envelope'></i>Messages</a>

          {showModal && (
  <div className="modal">
    <div className="modal-content">
      <form action="">
            <label htmlFor="nombre">Nombre</label>
            <input className='a' type="text" placeholder='Escribe Tu Nombre' id='nombre'/>
            <label htmlFor="email">Correo</label>
            <input type="email" placeholder='Escribe Tu Correo' id='email'/>
            <textarea placeholder='Escribe Tu Mnesaje' id="" cols="30" rows="10"></textarea>
        <input className='btn-enviar' type="submit" value="Enviar" />
      </form><br />
    <i  onClick={() => setShowModal(false)} className='bx bx-x'></i>
      
    </div>
  </div>)}
          
          
          </li>
          <li className='sidebar-list-item'><a onClick={Statistics} href="#"><i className='bx bx-line-chart' ></i>Statistics</a></li>
          <li className='sidebar-list-item'><a onClick={product} href=""><i className='bx bx-dice-5'></i>Products</a></li>
          <li className='sidebar-list-item'><a href=""><i className='bx bx-slider'></i>Settings</a></li>
          <li className='sidebar-list-item'><a href=""><i className='bx bx-log-in'></i>Logout</a></li>
        </ul>
       
      </div>


      {/* ***** */}

      <div className='container-perfil-card'>
        {/* PERFIL */}
        <Header/>
        
        {/* cards */}

        <div className="container-cards">
        
        </div>


      </div>

    </div>
  );
};

export default Sidebar;