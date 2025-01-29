import "./Table.css";

function Table() {
    const cars = [
        { model: "Civic", brand: "Honda", year: 2020, price: "$20,000" },
        { model: "Corolla", brand: "Toyota", year: 2021, price: "$22,000" },
        { model: "Model S", brand: "Tesla", year: 2022, price: "$70,000" },
        { model: "Mustang", brand: "Ford", year: 2019, price: "$30,000" }
    ];

    return (
        <div>
            <h2 id="text-danger">New Brand Cars</h2>
            <table>
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Brand</th>
                        <th>Year</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) => (
                        <tr key={index}>
                            <td>{car.model}</td>
                            <td>{car.brand}</td>
                            <td>{car.year}</td>
                            <td>{car.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;