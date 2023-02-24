import React, { useState, useEffect } from 'react';
import './ProductList.scss';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = () => {
    if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder('asc');
    }
  };

  const sortedProducts = products
    .filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  
  if (loading) {
    return (
      <div className='container box-loading'>
        <div className='loading'></div>
      </div>
    );
  }
  return (
    <main>
      <div className='box-search'>
        <div className='container'>
          <div className='row'>
            <input type='text' placeholder='Pesquisar produtos' value={searchTerm} onChange={handleSearch} />
            <button onClick={handleSort}>Ordenar por {sortOrder === 'asc' ? 'maior preço' : 'menor preço'}</button>
          </div>
        </div>
      </div>
      <div className='container internal'>      
        <div className='row grid-products'>
          {sortedProducts.length === 0 && <h2>Não há resultados para sua pesquisa</h2>}
          {sortedProducts.map((product) => (
            <div className='col-md-3' key={product.id}>
              <Link title='Ver detalhes do produto' className='access-product' to={`/product/${product.id}`}>
                <div className='box-products'>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className='box-info-product'>
                  <p>{product.title}</p>
                  <p className='price'>R${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductList;