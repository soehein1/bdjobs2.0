import React from 'react';
import AuthRoute from './routes/AuthRoute';
import HomeRoute from './routes/HomeRoute';
import './static/css/App.css'
import { BrowserRouter as Router,Link, Route ,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <nav className='header'>
        <h1 className='header-title'>Bdjob 2.0</h1>
        <ul className='nav-links'>
          <Link className='link' to = '/'>Home</Link>
          <Link className='link' to = '/categories'>Job Categories</Link>
          <Link className='link' to = '/auth'>Sign in 0r Sign up</Link>


        </ul>
      </nav>
      <Routes>

        <Route path="/" element = {<HomeRoute/>} />
        <Route path ='/categories' element = {<div>Categories</div>}/>
        <Route path ='/auth' element = {<AuthRoute/>}/>
      </Routes>
    </Router>
  );
}

export default App;
