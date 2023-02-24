import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Favorites.scss'

function Favorites (){
    const [products,setProducts] = useState([]);

    useEffect (()=> {
        const myList = localStorage.getItem('@products');
        setProducts(JSON.parse(myList) || [])
    }, [])

    function removeProduct(id) {
       let filterProducts = products.filter((product)=>{
        return (product.id !== id);
       });
       setProducts(filterProducts);
       localStorage.setItem('@products', JSON.stringify(filterProducts));
       toast.success('Produto removido com sucesso');
    }
      
    return(
        <div className='internal'>            
            <div className='title-page'>
                <div className='container'>            
                    <h1>Minha lista de produtos</h1>
                </div>
            </div>
            <table className='container'>
                <thead>
                    <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 && <h2 className='text-center'>Sua lista está vazia</h2>}
                    {products.map((product)=>{
                        return(
                        <tr key={product.id}>
                            <td data-label='Produto'>{product.title}</td>   
                            <td data-label='Preço'>R$ {product.price}</td>
                            <td>
                                <Link to={`/product/${product.id}`}>Ver detalhes</Link>
                                <button title='Remover da lista' onClick={()=>removeProduct(product.id)}>X</button>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
            
        </div>
    );
}

export default Favorites;