import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Statistics = ({ handleDarkModeToggle,darkWhite,icon }) => {
  const [showModal, setShowModal] = useState(false);
  const [change, setChange] = useState(false)
  const [contador, setcontador] = useState(6435)
  const navigate = useNavigate()

  const navegacion = (e) => {
    e.preventDefault();
    navigate('/products')

  }

  const changeModal = (e) => {
    e.preventDefault()
    setChange(true)
  }
  const abrir = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="container-padre">
      <div className="sidebar uno">
        <img
          className="sidebar-logo"
          src={`https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png`}
          alt=""
        />
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a className='notranslate' href="#">
              <i className="bx bx-home-alt"></i>Home
            </a>
          </li>
          <li className="sidebar-list-item">
            <a className='notranslate' onClick={abrir} href="">
              <i className="bx bx-envelope"></i>Messages
            </a>

            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <form action="">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      className="a"
                      type="text"
                      placeholder="Escribe Tu Nombre"
                      id="nombre"
                    />
                    <label htmlFor="email">Correo</label>
                    <input
                      type="email"
                      placeholder="Escribe Tu Correo"
                      id="email"
                    />
                    <textarea
                      placeholder="Escribe Tu Mnesaje"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                    <input
                      className="btn-enviar"
                      type="submit"
                      value="Enviar"
                    />
                  </form>
                  <br />
                  <i
                    onClick={() => setShowModal(false)}
                    className="bx bx-x"
                  ></i>
                </div>
              </div>
            )}
          </li>
          <li className="sidebar-list-item">
            <a className='notranslate' onClick={Statistics} href="#">
              <i className="bx bx-line-chart"></i>Statistics
            </a>
          </li>
          <li className="sidebar-list-item">
            <a className='notranslate' onClick={navegacion} href="">
              <i className="bx bx-dice-5"></i>Products
            </a>
          </li>

          <li className='sidebar-list-item'><a className='notranslate'  onClick={handleDarkModeToggle}  href="" style={{display:"flex",flexDirection:"row"}}> <div > { icon ? <i className='bx bx-moon'></i> :  <i className='bx bx-sun'></i> } </div> {darkWhite}</a>
            {/* modal configuracion */}
            {/* {change && (

              <div className="modal">
                <div className="modal-content">

                  <i onClick={handleDarkModeToggle} class='bx bxs-moon'></i>
                  <i onClick={() => setChange(false)} className='bx bx-x'></i>

                </div>
              </div>)} */}


          </li>
          <li className="sidebar-list-item">
            <a className='notranslate' href="">
              <i className="bx bx-log-in"></i>Logout
            </a>
          </li>
        </ul>
      </div>
      <div className="statistics-container">
        {/* Inicio Cards estadisticas */}

        <div className="statistics-container-inside">
          <div className=" cards-stats">
            <div className="statistics-cards">
              <p>
                <i className="bx bx-bookmark"></i>Orders
              </p>
              <span>18 <i class='bx bx-dish'></i></span>
            </div>
            <div className="statistics-cards">
              <p>
                <i className="bx bx-bookmark bx1"></i> Followers
              </p>
              <span>842 <i class='bx bx-user' undefined ></i></span>
            </div>
            <div className="statistics-cards">
              <p>
                <i className="bx bx-bookmark bx2"></i>Rating
              </p>
              <span>
                4.3 <i className="bx bxs-star"></i>
              </span>
            </div>
            <div className="statistics-cards">
              <p>
                <i className="bx bx-bookmark bx3"></i>Likes
              </p>
              <span>{contador}<i className='bx bx-like bx-tada' onClick={() => setcontador(contador + 1)} ></i></span>
            </div>
          </div>
          {/* fin Cards estadisticas */}
          <div className="stats-2">
            {/* grafico circular */}
            <div class="circle-container">
              <svg viewBox="0 0 100 100" class="circle-chart">
                <circle
                  class="circle-chart-background"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
                <circle
                  class="circle-chart-circle"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
                <text x="50" y="50" class="circle-chart-text">
                  70%
                </text>
              </svg>
            </div>
            {/* grafico barras */}
            <div className="grafico-barra">
              <div className="barra">
                <img src="https://cdn.kastatic.org/ka-perseus-graphie/e2ff3457af2f719e193a668883096ba4c3c5e1d4.svg" alt="" />
              </div>
            </div>
          </div><br /><br />
          {/* Contenedor de ordenes */}
          <div className="container-last-order">
            <ul className="last-order">
              <li className="orden-content"><span>Entregado</span> Combo Chef burguer whith double eat, cheddar, mozarella,whithout onion, chips extra large and coke </li>
              <li className="orden-content"><span>Entregado</span> Combo Chef burguer whith double eat, cheddar, mozarella,whithout onion, chips extra large and coke </li>
              <li className="orden-content cancel"><span>Cancelado</span>Combo Chef burguer whith double eat, cheddar, mozarella,whithout onion, chips extra large and coke </li>
              <li className="orden-content"><span>Entregado</span> Combo Chef burguer whith double eat, cheddar, mozarella,whithout onion, chips extra large and coke </li>
              <li className="orden-content"><span>Entregado</span> Combo Chef burguer whith double eat, cheddar, mozarella,whithout onion, chips extra large and coke </li>
              <li className="orden-content cancel"><span>Cancelado</span> Combo Chef burguer whith double eat, cheddar, mozarella,whithout onion, chips extra large and coke </li>
            </ul>
          </div>
        </div>
        <br /> <br />
      </div>

      {/* Finaliza Cards estadisticas */}
    </div>
  );
};

export default Statistics;
