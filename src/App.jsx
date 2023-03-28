import './App.css'
function App() {


  return (
    <div className="App">  
    <div className='sidebar'>
    <h1>LOGO</h1>
    <ul className='sidebar-list'>
      <li><i className='bx bx-home-alt'></i>Home</li>
      <li><i className='bx bx-envelope'></i>Messages</li>
      <li><i className='bx bx-line-chart' ></i>Statistics</li>
      <li><i className='bx bx-dice-5'></i>Products</li>
      <li><i className='bx bx-slider'></i>Settings</li>      
    </ul>
    <p><i className='bx bx-log-in' ></i>LOGOUT</p>
    </div>
    <div className='content'>     
    <div className='card-content'>
      <span></span>
    </div>
  
    </div>
     
    </div>
  )
}

export default App
