import Cars from "../Models/CarModel";
import "./CarTable.css";
interface CarsListProp{
  carslist:Cars[];
}
const AdvanceCars = (props:CarsListProp)=>{
  if(props.carslist.length==0){
      return(
          <div>
      <h2 className="text-danger">Cars List</h2>
      <h6 className="text-primary">Garage is Empty</h6>
    </div>
      );
  }

  return(
      <div>
    <h2 className="text-danger">Cars List</h2>
    <table className="table table-hover">
    <tr className="table-info">
          <th>ID</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Year</th>
          <th>Price</th>
        </tr>
        <tbody>
      {props.carslist.map((car) => (
        <tr key={car.id}>
          <td>{car.id}</td>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.price}</td>
            </tr>
      ))}
      </tbody>
    </table>
  </div>
  );
};
export default AdvanceCars;