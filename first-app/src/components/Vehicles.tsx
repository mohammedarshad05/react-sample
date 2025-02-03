interface Props {
  items: string[];
  title: string;
}

function Vehicles(props: Props) {
  return (
    <>
      <h2>{props.title}</h2>
      <ul className="list-group">
      {props.items.map((Vehicle) => (
          <li className="list-group-item">{Vehicle}</li>
        ))}
      </ul>
    </>
  );
}
export default Vehicles;
