import { Key, useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";


interface Product {
  id: Key | null | undefined;
  title: string;
  image: string;
  price: number;
  category: string;
  thumbnail : string;
}
function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setErrors] = useState<string | null>(null);
  

  const fetchUsers = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);

    if (response.ok == false) {
      setErrors(" An error occured while fetching the data");
    } else {
      const data = await response.json();
      setProducts(data);
    }
};
    useEffect(() => {
      fetchUsers();
    }, []);
    if (error) {
        return (
          <div className="container mt-5">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        );
      }
      return (
        <div className="container mt-4">
          <h2>Product List</h2>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100">

                  <img src={product.image} className="card-img-top" alt={product.title} />
                  <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                  <div className="card-body">

                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <Link to={`/products/${product.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default ProductList;