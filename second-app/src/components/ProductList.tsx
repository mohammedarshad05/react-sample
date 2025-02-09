import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: any;
  images: string;
  title: string;
  price: number;
}
const PostList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        setError("An error occurred while fetching the data");
      } else {
        const data = await response.json();
        setProducts(data.products);
      }
    };
    fetchProducts();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-4">
    <h2>Product List</h2>
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card h-100">
            <img src={product.images} className="card-img-top" alt={product.title} />
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

export default PostList;
