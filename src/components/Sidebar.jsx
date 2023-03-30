import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Sidebar = ({ Producto,handleBuy }) => {

const navigate = useNavigate()

const product = (e)=>{
e.preventDefault();
  navigate('/products')
}
  return (
    <div className="container-padre">

      {/* sliderbar */}
      <div className='sidebar uno'>
        <img className='sidebar-logo' src={`https://1000logos.net/wp-content/uploads/2023/01/Gofood-logo.png`} alt="" />
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'><a href="#"><i className='bx bx-home-alt'></i>Home</a></li>
          <li className='sidebar-list-item'><a href="mailto:adammaster29@gmail.com ?subject=peticion"><i className='bx bx-envelope'></i>Messages</a></li>
          <li className='sidebar-list-item'><a href="#"><i className='bx bx-line-chart' ></i>Statistics</a></li>
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
          {
            Producto?.map(ordenes => (
              <div key={ordenes.id} className='cards'>

                <div className='contenedor-ordenes-avatar'>
                  <span>Orden: #{ordenes.id}</span>
                  <img className='avatar-cards' src={ordenes.avatar} alt="" />

                </div>
                <hr />
                  {/*  */}
                <div className='contenedor-img-src'>
                  <img className='img-src' src={ordenes.src} alt="" />
                  <div className='img-src-price'><h3>{ordenes.name}</h3>
                    <span>$ {ordenes.price}</span>
                  </div>

                </div>
                  {/*  */}
                <div className='contenedor-icons'>
                <span>$ {ordenes.price}</span>

                <div>
                <i className='bx bx-x'></i>
                <i onClick={handleBuy} className='bx bx-check'></i>
                </div>
                </div>


              </div>


            ))

          }
        </div>


      </div>

    </div>
  );
};

export default Sidebar;