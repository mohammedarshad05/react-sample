import  { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    // rating: number[];
    images: string;
  }
  const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
  
    const [product, setProducts] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      console.log(`https://dummyjson.com/products/${id}`);
      
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch(() => setError("Failed to load post details"));
    }, [id]);
  
    if (error) return <p className="text-danger">{error}</p>;
    if (!product) return <p>Loading...</p>;
  
    return (
        <div className="container">
          <div className="card">
            
            <img src={product.images[0]} className="card-img-top" alt={product.title} />                                        
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: ${product.price}</p>
              <p className="card-text">Category: {product.category}</p>
              <p className="card-text">Brand: {product.brand}</p>
              {/* <p className="card-text">Rating: {product.rating}</p> */}
              <Link to="/" className="btn btn-primary">Back to Products</Link>
            </div>
          </div>
        </div>
      );
    };
  
  export default ProductDetails;  