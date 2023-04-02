import React from 'react'

const Header = ( {handleInputChange,nombreABuscar,buscarPorNombre}) => {


  return (
    <div>
      <div className='perfil'>
          <div className="peril-input">
            <div>
              <i onClick={buscarPorNombre} className='bx bx-search bx-md'></i>
              <input value={nombreABuscar} onChange={handleInputChange} type="text" placeholder='Buscar' />
            </div>


          </div>
          <div className='perfil-avatar'><i className='bx bx-bell bx-tada' ></i>  <img className='img-perfil' src="https://www.que.es/wp-content/uploads/2021/03/El-avatar-online.jpg" alt="" /></div>

        </div>
        <div className='container-ordenList'>
          <h3>OrdenList</h3>
          <div className="button-orden">
            
        

          </div>
        </div>
    </div>
  )
}

export default Header