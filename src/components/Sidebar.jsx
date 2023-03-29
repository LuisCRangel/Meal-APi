import React from 'react';

const Sidebar = () => {
  return (
    <div className="container-padre">

      {/* sliderbar */}
      <div className='sidebar uno'>
        <h1>LOGO</h1>
        <ul className='sidebar-list'>
          <li><a href="#"><i className='bx bx-home-alt'></i>Home</a></li>
          <li><a href="mailto:adammaster29@gmail.com ?subject=peticion"><i className='bx bx-envelope'></i>Messages</a></li>
          <li><a href="#"><i className='bx bx-line-chart' ></i>Statistics</a></li>
          <li><a href=""><i className='bx bx-dice-5'></i>Products</a></li>
          <li><a href=""><i className='bx bx-slider'></i>Settings</a></li>
        </ul>
        <p><i className='bx bx-log-in' ></i>LOGOUT</p>
      </div>


      {/* ***** */}

      <div className='container-perfil-card'>

        {/* PERFIL */}

        <div className='perfil'>
          <div className="peril-input">
            <div>
              <i class='bx bx-search'></i>
              <input type="text" placeholder='Buscar' />
            </div>

          
          </div>
          <div className='perfil-avatar'><i class='bx bx-bell bx-tada' ></i>  <img className='img-perfil' src="https://www.que.es/wp-content/uploads/2021/03/El-avatar-online.jpg" alt="" /></div>

        </div>
        <div className='container-ordenList'> 
        <h3>OrdenList</h3>
        <div className="button-orden">
          <button>Orden 1</button>
          <button>orden2</button>
          <button>orden 3</button>
          <button>orden 4</button>
          <button>orden 5</button>
          <button>orden 6</button>
          <button>orden 7</button>
          <button>orden 8</button>
          <button>orden 9</button>
          <button>orden10</button>

        </div>
        </div>
        {/* cards */}

        <div className="container-cards">
        </div>


      </div>

    </div>
  );
};

export default Sidebar;