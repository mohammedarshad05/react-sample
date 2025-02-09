import "./App.css";
import Products from "./components/Products";
import CarTable from "./components/CarTable";
import LoginStatus from "./components/LoginStatus";
import Vehicles from "./components/Vehicles";
import Course from "./components/Course";
import ProductsProps from "./components/ProductProps";
import fetchProduct from "./components/Services/ProductServices";
import fetchCar from "./components/Services/CarServices";
import AdvanceCars from "./components/AdvanceCars";
import fetchCourse from "./components/Services/courseservices";
import Toggle from "./components/Toggle";
import UserName from "./components/UserName";
import NameInput from "./components/NameInput";
import Greeting from "./components/Greeting";
import Counter from "./components/counter";
import Articles from "./components/Articles";
import ArticleList from "./components/ArticleList";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import RecipeList from "./components/RecipeList";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutUs"; 
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import PostSearchTerm from "./components/PostSearchTerm";

// function App() {
//   const Bikes = ["Honda", "Yamaha", "Suzuki", "Kawasaki", "BMW"];
//   return ("Honda", "Ya
//     <div>
//       <header>
//         <h1> React Demo</h1>
//       </header>
//       <div className="App">
//         <div className="container">
//           <Vehicles items={Bikes} title="bike names"></Vehicles>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// let courses = [
//   {
//     id: 1,
//     title: "Advanced Web Design",
//     description: "HTML CSS Bootstrap Responsive Design",
//     duration: "60 days",
//   },
//   {
//     id:2,
//     title: "Advanced PYTHON",
//     description: " libraries , frameworks , data structures",
//     duration: "60 days",
//   },
//   {
//     id: 3,
//     title: "Advanced EXCEL",
//     description: "power bi",
//     duration: "60 days",
//   },
// ];
//   const carss = [
//     { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
//     { id: 2, brand: 'Honda', model: 'Civic', year: 2021 },
//     { id: 3, brand: 'Ford', model: 'Mustang', year: 2022 }
// ];

// <div>
//   <header>
//     <h1> React Demo</h1>
//   </header>
//   <div className="App">
//     <div className="container">
//       <Vehicles items={Bikes} title="bike names"></Vehicles>
//     </div>
//   </div>
// </div>

//   function App() {

//     return (
//       <Router>
//       <header>
//          <div className="App">
//           <h1>React Demo </h1></div>
//           </header>
//           <nav>
//           <Link to="/">Home</Link> | <Link to="/about">About Us </Link>  | <Link to="/posts">ProductsList</Link>
//           </nav>
//           {/* < AdvanceCars carslist={fetchCar()} /> */}
//           {/* <AdvanceCars carslist={fetchCar()} /> */}
//           {/* <Toggle/> */}
//           {/* <UserName/> */}
//           {/* <UserName/> */}

//           {/* <Greeting> Hello world </Greeting> */}
//           {/* <Counter/> */}
//           {/* <Articles>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cum neque distinctio maxime libero ab cumque consectetur eveniet, quas atque voluptatem et reprehenderit quasi, nobis repellendus quae? Tempora, eaque explicabo.</Articles> */}
//           {/* <ProductList/> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           {/* <Route path="/Product" element={<ProductList />} /> */}
//           <Route path="/posts" element={<PostList/>} />

//           </Routes>
//           </Router>
//   );
// }

// export default App;

function App() {
  return (
    <Router>
        <header>
        <h1>React Demos</h1>
      </header>
      <nav className="navbar navbar-expand-lg bg-danger text-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link  to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link active" to="/about" >About Us </Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link active" to="/posts" >postslist </Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link active" to="/products" >productslist </Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link active" to="/Recipe" >Recipelist </Link>
        </li>
        {/* <li className="nav-item"> */}
        {/* <Link  className="nav-link active" to="/posts-search" >search Us </Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/posts" element={<PostList/>} />
<Route path="/posts-search" element={<PostSearchTerm />} />
<Route path="/posts/:id" element={<PostDetails />} />
<Route path="/products/" element={<ProductList />} />
<Route path="/Recipe/" element={<RecipeList />} />
</Routes>
</Router>
  );
}
export default App;
