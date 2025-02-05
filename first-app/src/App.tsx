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
          
          
  function App() {
   
    return (
      <div>
      <header>
         <div className="App">
          <h1>React Demo </h1>
      </div>
          </header>
          {/* < AdvanceCars carslist={fetchCar()} /> */}
          {/* <AdvanceCars carslist={fetchCar()} /> */}
          {/* <Toggle/> */}
          {/* <UserName/> */}
          {/* <UserName/> */}
          
          {/* <Greeting> Hello world </Greeting> */}
          {/* <Counter/> */}
          {/* <Articles>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cum neque distinctio maxime libero ab cumque consectetur eveniet, quas atque voluptatem et reprehenderit quasi, nobis repellendus quae? Tempora, eaque explicabo.</Articles> */}
          <UserList/>
          </div>
     
  );
}

export default App;
