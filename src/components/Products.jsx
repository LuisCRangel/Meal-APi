import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useEffect } from 'react';

const Products = () => {
    const [showModal, setShowModal] = useState(false);

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
        { id: 4, name: 'Ensaladas De Vegetales', price: 10.4, avatar: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/avatar-facebook-2632445.jpg?tf=3840x', src: 'https://media.istockphoto.com/id/188099381/es/foto/ensalada-de-vegetales-frescos-del-jard%C3%ADn-con.jpg?s=612x612&w=is&k=20&c=VzkIQaEwYbvZ25nIF8_AIdVGr3NS9gNuyYEWeOU5m88=' },
        { id: 5, name: 'Ensalada De Frutas', price: 18.3, avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', src: 'https://media.gettyimages.com/id/98841227/es/foto/fruit-salad.jpg?s=612x612&w=gi&k=20&c=F9SIEy3KCr0Lt3JEQKt9ZQlf6HehSCmPQNFODAf23fc=' },
        { id: 6, name: 'Postres Gourmet', price: 5.7, avatar: 'https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg', src: 'http://quintotiempo.com/media/k2/items/cache/3899dfe821816fbcb3db3e3b23f81585_XL.jpg' },
        { id: 7, name: 'Ensaladas De Vegetales', price: 10.4, avatar: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/avatar-facebook-2632445.jpg?tf=3840x', src: 'https://media.istockphoto.com/id/188099381/es/foto/ensalada-de-vegetales-frescos-del-jard%C3%ADn-con.jpg?s=612x612&w=is&k=20&c=VzkIQaEwYbvZ25nIF8_AIdVGr3NS9gNuyYEWeOU5m88=' },
        { id: 8, name: 'Ensalada De Frutas', price: 18.3, avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', src: 'https://media.gettyimages.com/id/98841227/es/foto/fruit-salad.jpg?s=612x612&w=gi&k=20&c=F9SIEy3KCr0Lt3JEQKt9ZQlf6HehSCmPQNFODAf23fc=' },
        { id: 9, name: 'Postres Gourmet', price: 5.7, avatar: 'https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg', src: 'http://quintotiempo.com/media/k2/items/cache/3899dfe821816fbcb3db3e3b23f81585_XL.jpg' },
        { id: 10, name: 'Ensaladas De Vegetales', price: 10.4, avatar: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/avatar-facebook-2632445.jpg?tf=3840x', src: 'https://media.istockphoto.com/id/188099381/es/foto/ensalada-de-vegetales-frescos-del-jard%C3%ADn-con.jpg?s=612x612&w=is&k=20&c=VzkIQaEwYbvZ25nIF8_AIdVGr3NS9gNuyYEWeOU5m88=' },
        { id: 11, name: 'Ensalada De Frutas', price: 18.3, avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', src: 'https://media.gettyimages.com/id/98841227/es/foto/fruit-salad.jpg?s=612x612&w=gi&k=20&c=F9SIEy3KCr0Lt3JEQKt9ZQlf6HehSCmPQNFODAf23fc=' },
        { id: 12, name: 'Postres Gourmet', price: 5.7, avatar: 'https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg', src: 'http://quintotiempo.com/media/k2/items/cache/3899dfe821816fbcb3db3e3b23f81585_XL.jpg' }

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
    setError(`No se encontró ningún producto con el nombre "${nombreABuscar}"`);
  }
}



    function handleInputChange(event) {
        setNombreABuscar(event.target.value);
    }





    return (

        <div className="container-padre">

            {/* sliderbar */}
            <div className='sidebar uno'>
                <img className='sidebar-logo' src={`https://1000logos.net/wp-content/uploads/2023/01/Gofood-logo.png`} alt="" />
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'><a href="#"><i className='bx bx-home-alt'></i>Home</a></li>
                    <li className='sidebar-list-item'><a onClick={abrir} href=""><i className='bx bx-envelope'></i>Messages</a>

                        {showModal && (
                            <div className="modal">
                                <div className="modal-content">
                                    <form action="">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input className='a' type="text" placeholder='Escribe Tu Nombre' id='nombre' />
                                        <label htmlFor="email">Correo</label>
                                        <input type="email" placeholder='Escribe Tu Correo' id='email' />
                                        <textarea placeholder='Escribe Tu Mnesaje' id="" cols="30" rows="10"></textarea>
                                        <input className='btn-enviar' type="submit" value="Enviar" />
                                    </form><br />
                                    <i onClick={() => setShowModal(false)} className='bx bx-x'></i>

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
                <Header buscarPorNombre={buscarPorNombre} handleInputChange={handleInputChange} nombreABuscar={nombreABuscar} />

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
                                        <i className='bx bx-check'></i>
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