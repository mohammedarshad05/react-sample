import { useEffect, useState } from "react";

interface User{
    id:number;
    title:string;
    image :string;
    ingredients:string[];
    instructions:string[];
}
function RecipeList(){
    const [users,setRecipes]= useState<User[]>([]);

    const fetchUsers = async() => {
        const respose = await fetch('https://dummyjson.com/recipes');
        const data = await respose.json();
        setRecipes(data.recipes);
    };
    useEffect (() =>{
        fetchUsers();
    },[]);

    return (
        <div className="container">
            <div className="row">
                {users.map((user) => (
                    <div className="col-md-4" key={user.id}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{user.title}</h5>
                                <img src={user.image} className="card-img-top" alt="..."/>
                                <p className="card-text">{user.ingredients}</p>
                                <p className="card-text">{user.instructions}</p>
                                <a href="#" className="btn btn-primary">View Recipe</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default RecipeList;