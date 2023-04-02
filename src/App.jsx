import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Products from './components/Products';
import Sidebar from './components/Sidebar'
import Statistics from './components/Statistics';
function App() {

  const[product,setProduct] = useState()
  useEffect(()=>{
    setProduct(productos);
  })
  const productos = [
    { id: 1, name:'Ensaladas De Vegetales', price: 10.4, avatar:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/avatar-facebook-2632445.jpg?tf=3840x', src: 'https://media.istockphoto.com/id/188099381/es/foto/ensalada-de-vegetales-frescos-del-jard%C3%ADn-con.jpg?s=612x612&w=is&k=20&c=VzkIQaEwYbvZ25nIF8_AIdVGr3NS9gNuyYEWeOU5m88=' },
    { id: 2, name:'Ensalada De Frutas' , price: 18.3, avatar:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', src: 'https://media.gettyimages.com/id/98841227/es/foto/fruit-salad.jpg?s=612x612&w=gi&k=20&c=F9SIEy3KCr0Lt3JEQKt9ZQlf6HehSCmPQNFODAf23fc=' },
    { id: 3, name:'Postres Gourmet', price: 5.7, avatar:'https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg', src: 'http://quintotiempo.com/media/k2/items/cache/3899dfe821816fbcb3db3e3b23f81585_XL.jpg' },
    { id: 4, name:'Ensaladas De Vegetales', price: 10.4, avatar:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/avatar-facebook-2632445.jpg?tf=3840x', src: 'https://media.istockphoto.com/id/188099381/es/foto/ensalada-de-vegetales-frescos-del-jard%C3%ADn-con.jpg?s=612x612&w=is&k=20&c=VzkIQaEwYbvZ25nIF8_AIdVGr3NS9gNuyYEWeOU5m88=' },
    { id: 5, name:'Ensalada De Frutas' , price: 18.3, avatar:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', src: 'https://media.gettyimages.com/id/98841227/es/foto/fruit-salad.jpg?s=612x612&w=gi&k=20&c=F9SIEy3KCr0Lt3JEQKt9ZQlf6HehSCmPQNFODAf23fc=' },
    { id: 6, name:'Postres Gourmet', price: 5.7, avatar:'https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg', src: 'http://quintotiempo.com/media/k2/items/cache/3899dfe821816fbcb3db3e3b23f81585_XL.jpg' }, 
    { id: 7, name:'Ensaladas De Vegetales', price: 10.4, avatar:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/avatar-facebook-2632445.jpg?tf=3840x', src: 'https://media.istockphoto.com/id/188099381/es/foto/ensalada-de-vegetales-frescos-del-jard%C3%ADn-con.jpg?s=612x612&w=is&k=20&c=VzkIQaEwYbvZ25nIF8_AIdVGr3NS9gNuyYEWeOU5m88=' },
    { id: 8, name:'Ensalada De Frutas' , price: 18.3, avatar:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', src: 'https://media.gettyimages.com/id/98841227/es/foto/fruit-salad.jpg?s=612x612&w=gi&k=20&c=F9SIEy3KCr0Lt3JEQKt9ZQlf6HehSCmPQNFODAf23fc=' },
    { id: 9, name:'Postres Gourmet', price: 5.7, avatar:'https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg', src: 'http://quintotiempo.com/media/k2/items/cache/3899dfe821816fbcb3db3e3b23f81585_XL.jpg' },
    { id: 10, name:'Ensaladas De Vegetales', price: 10.4, avatar:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/avatar-facebook-2632445.jpg?tf=3840x', src: 'https://media.istockphoto.com/id/188099381/es/foto/ensalada-de-vegetales-frescos-del-jard%C3%ADn-con.jpg?s=612x612&w=is&k=20&c=VzkIQaEwYbvZ25nIF8_AIdVGr3NS9gNuyYEWeOU5m88=' },
    { id: 11, name:'Ensalada De Frutas' , price: 18.3, avatar:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000', src: 'https://media.gettyimages.com/id/98841227/es/foto/fruit-salad.jpg?s=612x612&w=gi&k=20&c=F9SIEy3KCr0Lt3JEQKt9ZQlf6HehSCmPQNFODAf23fc=' },
    { id: 12, name:'Postres Gourmet', price: 5.7, avatar:'https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg', src: 'http://quintotiempo.com/media/k2/items/cache/3899dfe821816fbcb3db3e3b23f81585_XL.jpg' } 
   
  ];
const[Producto,setProucto] = useState()

useEffect(()=>{
  setProucto(productos)
},[])


  return (
    <div className='App'> 
        <HashRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/products" element={<Products product={product} />} /> 
        <Route path="/Statistics" element={<Statistics />} />     
      </Routes>
    </HashRouter>
    <div>
    </div>
    </div>
  )
}

export default App
