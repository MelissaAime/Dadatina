import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../sections/home/home';
import { Products } from '../sections/products/products';
import { Navbar } from '../components/NavBar/navbar';

export const MyRoutes = () => {
    return (
      <BrowserRouter> 
          <Navbar/>

          <Routes>
              <Route path='/' element={ <Home/> } />
              <Route path='/productos' element={ <Products/> } />

          </Routes>
      </BrowserRouter> 
    );
  }