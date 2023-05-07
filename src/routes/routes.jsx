import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../sections/home/home';
import { Products } from '../sections/products/products';
import { Navbar } from '../components/navbar/navbar';
import { ProductDetails } from '../sections/details/details';
import { NotFound } from '../components/NotFound';

export const MyRoutes = () => {
    return (
      <BrowserRouter> 
          <Navbar/>

          <Routes>
              <Route path='/' element={ <Home/> } />
              <Route path='/productos' element={ <Products/> } />
              <Route path="/productos/:productId" element={<ProductDetails/>} />
              <Route component={NotFound} />
          </Routes>
      </BrowserRouter> 
    );
  }