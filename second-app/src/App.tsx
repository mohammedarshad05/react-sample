import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./components/AboutUs";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Home from "./Home";

function App() {
  return (
    <Router>
      <header>
        <div className="App">
          <h1>React Demo </h1>
        </div>
      </header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About Us </Link> |{" "}
        <Link to="/posts">ProductsList</Link>
      </nav>
      {/* <div className="container mt-4">
            <h1 className="text-center">📝 Blog Posts</h1>
            <Routes>
            <Link className="nav-link active" to="/">
                  Home
                </Link>
              <Route path="/" element={<PostList />} />
              <Route path="/posts/:id" element={<PostDetails />} />
            </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/Product" element={<ProductList />} /> */}
        <Route path="/posts" element={<PostList />} />
      </Routes>
    </Router>
  );
}
export default App;

//   return (
//     <Router>
//       <header>
//         <div className="App">
//           <h1>React Demo </h1>
//         </div>
//       </header>
//       <Routes>
//         <Route path="/" element={<ProductList />} />
// <Route path="/" element={<Home />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
