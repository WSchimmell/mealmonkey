import { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Spinner from './Spinner';
import axios from "axios";
// import { useState } from "react";

const TheMeal = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState();

    useEffect(() => {
        (async function  fetchwAzios() {
            let response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            setCategories(response.data.categories)
            setLoading(false)
        })();
    }, []);

    return loading ? <Spinner /> : (  
        <>
            <h3>The Meal</h3> 
                {categories.map(category => (
                    <Link key={category.idCategory} to={`/${category.strCategory}`}>
                     <p>{category.strCategory}</p>  
                     </Link> 
            ))}
        </> 
        );
    }
export default TheMeal;


