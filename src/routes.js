import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Favorites from './pages/Favorites';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<ProductList/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/favoritos" element={<Favorites/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default RoutesApp;