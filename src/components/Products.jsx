import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Products = ({handleDarkModeToggle,darkWhite,icon}) => {
    const [showModal, setShowModal] = useState(false);
    const [Modal, setModal] = useState(false);

    const abrirModal = (e) => {
        e.preventDefault();
        setModal(true)
      }
    const navigate = useNavigate()

    const product = (e) => {
        e.preventDefault();
        navigate('/products')
    }

    const Statistics = (e) => {
        e.preventDefault();
        navigate('/Statistics')
    }

    const abrir = (e) => {
        e.preventDefault();
        setShowModal(true)
    }

    // ************************buscar*****************************

    const productos = [
        { id: 1, name: 'Ensaladas De Vegetales', price: 10.4, avatar: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/avatar-facebook-2632445.jpg?tf=3840x', src: 'https://media.istockphoto.com/id/188099381/es/foto/ensalada-de-vegetales-frescos-del-jard%C3%ADn-con.jpg?s=612x612&w=is&k=20&c=VzkIQaEwYbvZ25nIF8_AIdVGr3NS9gNuyYEWeOU5m88=' },
        { id: 2, name: 'Ensalada De Frutas', price: 18.3, avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', src: 'https://media.gettyimages.com/id/98841227/es/foto/fruit-salad.jpg?s=612x612&w=gi&k=20&c=F9SIEy3KCr0Lt3JEQKt9ZQlf6HehSCmPQNFODAf23fc=' },
        { id: 3, name: 'Postres Gourmet', price: 5.7, avatar: 'https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg', src: 'http://quintotiempo.com/media/k2/items/cache/3899dfe821816fbcb3db3e3b23f81585_XL.jpg' },
        { id: 4, name:'Pizza Salami', price: 15.9, avatar:'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png', src: 'https://www.saborusa.com/ni/wp-content/uploads/sites/19/2019/10/Disfruta-una-suculenta-pizza-al-estilo-New-York-en-Bogota-Foto-destacada.png' },
        { id: 5, name: 'Hamburguesa Tocino', price: 10.3, avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png?w=360', src: 'https://tofuu.getjusto.com/orioneat-prod/rWXaykc3qN27kz9Gn-QUESO%20TOCINETA.jpg' },
        { id: 6, name: 'Pizza Vegana', price: 22.3, avatar: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png', src: 'https://cdn0.recetasgratis.net/es/posts/5/2/4/pizza_vegetariana_casera_12425_orig.jpg' },
        { id: 7, name: 'Salchipapa Mixta', price: 10.4, avatar: 'https://img.freepik.com/free-icon/user_318-219670.jpg', src: 'https://imag.bonviveur.com/emplatado-final-de-las-salchipapas.jpg' },
        { id: 8, name: 'Hamburguesa vegana', price: 16.2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNbSU_JOKegoblQ1eSpxjCbfZ8myAlGUEC6xMb6YvykE8CUFgKco7AzwmLefjhmqx_Fc&usqp=CAU', src: 'https://www.pequerecetas.com/wp-content/uploads/2009/04/hamburguesa-de-garbanzos-casera-receta.jpg' },
        { id: 9, name: 'Pizza Napolitana', price: 14.2, avatar: 'https://img.freepik.com/iconos-gratis/hombre_318-860796.jpg', src: 'https://osojimix.com/wp-content/uploads/2022/06/Para-la-masa-de-pizza-napolitana-8-hrs-fermentacion-Web-1.jpg' },
        { id: 10, name: 'Carne al Carbon', price: 30.5, avatar: 'https://img.freepik.com/iconos-gratis/hombre_318-860806.jpg', src: 'https://www.cardamomo.news/__export/1617477850059/sites/debate/img/2021/04/03/como_marinar_carne_para_asar_crop1617477689960.jpeg_976912859.jpeg' },
        { id: 11, name: 'Gaseosa Coca-Cola', price: 4, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCI9FVM3otrPC0kAOIoYeTbNYv1wZy4-ig9iKKRBwXcPWbB2NlEKvaHn4BZ9JEBVdU_Zk&usqp=CAU', src: 'https://www.panaderiaveracruz.com/wp-content/uploads/2022/01/Coca_Cola.jpg' },
        { id: 12, name: 'Postres Fresa', price: 5.7, avatar: 'https://img.freepik.com/iconos-gratis/profesor_318-201555.jpg', src: 'https://www.elespectador.com/resizer/kPoTp7S4WfvuR80WTk2sFEXyVws=/525x350/filters:quality(70):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/OIDJYRKQLVAITI6TADHXTZXVQQ.jpg' },
        { id: 13, name: 'Perro Caliente', price: 2.5, avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', src: 'https://www.elheraldo.co/sites/default/files/articulo/2020/05/14/perro.jpg' },
        { id: 14, name: 'Salchipapa Sencilla', price: 7.5, avatar: 'https://cdn-icons-png.flaticon.com/512/186/186313.png', src: 'https://yumlyfood.com/wp-content/uploads/2021/04/salchipapa-colombiana.jpg.webp' },
        { id: 15, name: 'Gaseosa Manzana', price: 3.2, avatar: 'https://cdn-icons-png.flaticon.com/512/4975/4975733.png', src: 'https://myiberoamericanmarket.com/wp-content/uploads/2020/12/Manzana-Postobon-Pet-500.png' },
        { id: 16, name: 'Puntagorda Asada', price: 35.2, avatar: 'https://cdn-icons-png.flaticon.com/512/190/190670.png', src: 'https://www.zankyou.com.co/images/card-main/5eb/cb1a/550/475/w/803276/-/1579356503.jpg' },
        { id: 17, name: 'Pechuga Asada', price: 28.9, avatar: 'https://cdn-icons-png.flaticon.com/512/3781/3781973.png', src: 'https://chivoloco.com/wp-content/uploads/2020/09/120409052_162418522177214_5622803214435965741_n.jpg' },
        { id: 18, name: 'Arroz con Camaron', price: 23.4, avatar: 'https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Salesman_1-512.png', src: 'https://img-global.cpcdn.com/recipes/f2fdc0e2933724b5/400x400cq70/photo.jpg' },
        { id: 19, name: 'Perro Caliente Especial', price: 5, avatar: 'https://cdn2.iconfinder.com/data/icons/professions-12/64/03-salesman-512.png', src: 'https://restaurantepapos.com/wp-content/uploads/2021/01/Burguer-House-Hot-Dog_Perro-Super-Articulado_550x440.jpg' },
        { id: 20, name: 'Gaseosa Naranjada', price: 3.2, avatar: 'https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_man_male_chinese-512.png', src: 'https://www.mercadoslpineda.co/6075-large_default/gaseosa-postobon-250-ml-naranja.jpg' },
        { id: 21, name: 'Postre de Cafe', price: 7.5, avatar: 'https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_man_male_afro_2-512.png', src: 'https://placeralplato.com/files/2015/11/Tiramis.jpg' },
        { id: 22, name: 'Arroz con Pollo', price: 15, avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/275/818/small/female-avatar-woman-profile-icon-for-network-vector.jpg', src: 'https://vamosllegando.com/wp-content/uploads/2021/05/arroz-con-pollo-colombia.jpg' },
        { id: 23, name: 'Pollo Broster', price: 10.8, avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/275/811/small_2x/blond-woman-avatar-profile-icon-of-smiling-girl-vector.jpg', src: 'https://larazon.pe/wp-content/uploads/2020/02/pollo.jpeg' },
        { id: 24, name: 'Brochetas', price: 14.6, avatar: 'https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png', src: 'https://www.annarecetasfaciles.com/files/brochetas-pollo-adobado-1-scaled.jpg' },
        { id: 25, name: 'Cerveza Aguila', price: 6, avatar: 'https://cdn.dribbble.com/users/3734064/screenshots/14413405/media/6744f33319119e4db7637ba5b49e5d78.png?compress=1&resize=400x300', src: 'https://cirolicores.com.co/wp-content/uploads/2022/02/aguila-original-330-2019-removebg-preview.png' },
        { id: 26, name: 'Gaseosa Uva', price: 3.2, avatar: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top', src: 'https://mistiendas.com.co/4145-large_default/uva-postobon-x-250-ml.jpg' },
        { id: 27, name: 'Carne Asada', price: 28, avatar: 'https://www.shutterstock.com/image-vector/portrait-young-asian-man-vector-260nw-1563535414.jpg', src: 'https://media-cdn.tripadvisor.com/media/photo-s/06/e4/88/85/el-carnaval-del-pollo.jpg' },
        { id: 28, name: 'Cerveza Poker', price: 6, avatar: 'https://www.adslzone.net/app/uploads-adslzone.net/2022/04/free-avatar-apertura.jpg', src: 'https://www.bavaria.co/sites/g/files/phfypu1316/f/Bavaria-SKUs-Regular.jpg' },
        { id: 29, name: 'Langosta', price: 100, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewRoz3OJG2U9n5ZH_QlD_n-qVeWgaV4iUpJzjK-bVTFw9A7jVsbQHyE2DtkbUHeTceWA&usqp=CAU', src: 'https://www.la-cocina-mexicana.com/base/stock/Recipe/1314-image/1314-image_web.jpg' },
        { id: 30, name: 'Cerveza Corona', price: 6, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe3eDy9IDA5kKop-WFnLy0KyAT6Rk73KjVPQ&usqp=CAU', src: 'https://cdn.inoutdelivery.com/corralgourmet.inoutdelivery.com/sm/1596224561979-4088-CERVEZA-CORONA-(350x350).png' },

    ];




    const [nombreABuscar, setNombreABuscar] = useState('');
    const [resultado, setResultado] = useState();
    useEffect(() => {
        setResultado(productos)
    }, [])

    
    
    function buscarPorNombre() {
  const nombreBuscado = nombreABuscar.toLowerCase();
  
  const resultadoDeBusqueda = productos.filter(
    product => product.name.toLowerCase().includes(nombreBuscado)
  );
  if (resultadoDeBusqueda.length > 0) {
    setResultado(resultadoDeBusqueda);
  } else {
    alert(`No se encontró ningún producto con el nombre "${nombreABuscar}"`);
  }
}



    function handleInputChange(event) {
        setNombreABuscar(event.target.value);
    }

    return (
      <div className="container-padre">

      {/* sliderbar */}
      <div className='sidebar uno'>
        <img className='sidebar-logo' src={`https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png`} alt="" />
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'><a className='notranslate' href="#"><i className='bx bx-home-alt'></i>Home</a></li>
          <li className='sidebar-list-item'><a className='notranslate' onClick={abrir}  href=""><i className='bx bx-envelope'></i>Messages</a>

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
          <li className='sidebar-list-item'><a className='notranslate' onClick={Statistics} href="#"><i className='bx bx-line-chart' ></i>Statistics</a></li>
          <li className='sidebar-list-item'><a className='notranslate' onClick={product} href="#"><i className='bx bx-dice-5'></i>Products</a></li>
          <li className='sidebar-list-item'><a className='notranslate'  onClick={handleDarkModeToggle}  href="" style={{display:"flex",flexDirection:"row"}}> <div > { icon ? <i className='bx bx-moon'></i> :  <i className='bx bx-sun'></i> } </div> {darkWhite}</a>
          
          {/* modal configuracion */}
          {/* {Modal && (

<div className="modal">
  <div className="modal-content">

    <i onClick={handleDarkModeToggle} class='bx bxs-moon'></i>
    <i onClick={() => setModal(false)} className='bx bx-x'></i>

  </div>
</div>)} */}
          </li>
          <li className='sidebar-list-item'><a className='notranslate' href=""><i className='bx bx-log-in'></i>Logout</a></li>
        </ul>
       
      </div> 


      {/* ***** */}

      <div className='container-perfil-card'>
        {/* PERFIL */}
        <Header handleInputChange={handleInputChange} nombreABuscar={nombreABuscar} buscarPorNombre={buscarPorNombre} />
        
        {/* cards */}

        <div className="container-cards">
          {
            resultado?.map(ordenes => (
              <div key={ordenes.id} className='cards'>

                <div className='contenedor-ordenes-avatar'>
                  <span>Orden: #{ordenes.id}</span>
                  <img className='avatar-cards' src={ordenes.avatar} alt="" />

                </div>
                <hr />            
                <div className='contenedor-img-src'>
                  <img className='img-src' src={ordenes.src} alt="" />
                  <div className='img-src-price'>
                    <h3>{ordenes.name}</h3>                 
                  </div>

                </div>
                  {/*  */}
                <div className='contenedor-icons'>
                <span>$ {ordenes.price}</span>

                <div>
              <button><i className='bx bx-cart bx-tada'></i></button>
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

export default Products;