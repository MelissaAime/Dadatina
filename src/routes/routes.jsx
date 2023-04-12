import { BrowserRouter } from 'react-router-dom';
import { Home } from '../sections/home/home';
import { Products } from '../sections/products/products';
import { Navbar } from '../sections/navbar/navbar';

export const MyRoutes = () => {
    return (
      <BrowserRouter> 
          <Navbar/>
          <Home/>
          <Products/>
          {/* <Routes>
              <Route path='/' element={ <Home/> } />
              <Route path='/' element={ <Products/> } />

          </Routes> */}
      </BrowserRouter> 
    );
  }