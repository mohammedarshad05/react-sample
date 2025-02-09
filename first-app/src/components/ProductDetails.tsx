import { useEffect, useState } from "react";

interface Product {
    id: number;
    title : string;
    description : string;
    price : number;
    image : string;
    category : string;
    brand : string;
    thumbnail : string;
    rating : number;
    }
  const ProductDetails: React.FC = () => {
const [product, setProducts] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchProduct = async () => { 
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                setError("Failed to load product details");
            }
        };
        fetchProduct();
        }, [id]);
        if (error) return <p className="text-danger">{error}</p>;
        if (!product) return <p>Loading...</p>;

        return (
            <div className="container mt-4">
                <h2>{product.title}</h2>
                <img src={product.thumbnail} alt={product.title} className="img-fluid mb-3" />
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Rating:</strong> {product.rating}</p>
            </div>
        );
    };
    



  export default ProductDetails;
    