import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../sections/home/home';
import { Products } from '../sections/products/products';
import { Navbar } from '../components/navbar/navbar';
import { ProductDetails } from '../sections/details/details';
import { AboutMe } from '../sections/aboutme/aboutme';
import { MyBook } from '../sections/book/book';
import { SocialMedia } from '../sections/socialmedia/socialmedia';
import { BookInfo } from '../sections/bookInfo/book-info';
import { Footer } from '../sections/footer/footer';
import { Copyright } from '../components/copyright/copyright';

export const MyRoutes = () => {
    return (
      <BrowserRouter> 
          <Navbar/>

          <Routes>
              <Route path='/' element={ <Home/> } />
              <Route path='/productos' element={ <Products/> } />
              <Route path="/productos/:productTitle" element={ <ProductDetails/> } />
              <Route path='/sobre-mi' element={ <AboutMe/> } />
              <Route path='/libro' element={ <MyBook/> } />
              <Route path='/libro/comprar' element={ <BookInfo/> } />
              <Route path='/redes' element={ <SocialMedia/> } />
              <Route path='*' element={ <Navigate to='/' /> } />     
          </Routes>

          <Footer/>
          <Copyright/>
      </BrowserRouter> 
    );
  }