import "./Products.css";
import Product   from "../Models/Product";
interface ProductsProps {
  ProductList: Product[];
}
function ProductsProps(props: ProductsProps) {
  if (props.ProductList.length == 0) {
    return <div> No products found</div>;
  }

  return (
    <>
      {props.ProductList.map((product) => {
        return (
          <div key={product.id}>
                <div className="card">

            <img className="card-img-top" src={product.image} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <div>

                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn btn-primary">Buy Now</button>

                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Category: {product.category}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default ProductsProps;
