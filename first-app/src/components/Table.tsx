import "./Cars.css";

function Table() {
    return (
        <div>
        <h2 id="Table">new brand cars</h2>
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
        <tr>
            <td>Civic</td>
            <td>Honda</td>
            <td>2020</td>
            <td>$20,000</td>
        </tr>
        <tr>
            <td>Corolla</td>
            <td>Toyota</td>
            <td>2021</td>
            <td>$18,000</td>
        </tr>
        <tr>
            <td>Model 3</td>
            <td>Tesla</td>
            <td>2022</td>
            <td>$35,000</td>
        </tr>
        <tr>
            <td>Mustang</td>
            <td>Ford</td>
            <td>2019</td>
            <td>$25,000</td>
        </tr>
        <tr>
            <td>Accord</td>
            <td>Honda</td>
            <td>2021</td>
            <td>$27,000</td>
        </tr>
        <tr>
            <td>Camry</td>
            <td>Toyota</td>
            <td>2020</td>
            <td>$24,000</td>
        </tr>
        <tr>
            <td>Model S</td>
            <td>Tesla</td>
            <td>2022</td>
            <td>$75,000</td>
        </tr>
    </tbody>
</table>
</div>
    )};
  export default Table;