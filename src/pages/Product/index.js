import { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Product.scss';
import { toast } from "react-toastify";

function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const fetchProducts = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
        };
        fetchProducts();
    }, []);

    function saveProduct (){
        const minhaLista = localStorage.getItem("@products");

        let productsSave = JSON.parse(minhaLista) || [];
        const hasProduct = productsSave.some((productSave) => productSave.id === product.id)

        if(hasProduct) {
            toast.warn("Esse produto já está na sua lista");
            return;
        }

        productsSave.push(product);
        localStorage.setItem("@products", JSON.stringify(productsSave));
        toast.success("Produto salvo com sucesso");
    };


    if(loading){
        return(
            <div className="container box-loading">
                <div className="loading"></div>
            </div>
        );
    }

    return(
        <div className="internal">
            <div className="title-page">
                <div className="container">            
                    <h1>{product.title}</h1>
                </div>
            </div>
            <div className="container">
                <section className="content-product row">
                    <figure className="box-image-products col-md-6">
                        <img src={product.image} />
                    </figure>
                    <div className="box-info-products col-md-5">
                        <h2>Descrição</h2>
                        <p className="description">{product.description}</p>
                        <h4>Categoria</h4>
                        <p className="description">{product.category}</p>
                        <p className="price">R$ {product.price}</p>
                        <div className="box-buttons">
                            <button onClick={saveProduct}>Salvar nos favoritos</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Product;
    