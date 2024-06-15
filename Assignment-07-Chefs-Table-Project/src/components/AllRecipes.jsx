import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useState } from 'react'
import Recipe from './Recipe';

function AllRecipes({ handleCook }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
     try {
       const res = await fetch('./recipes.json');
       const data = await res.json();
       setRecipes(data);
     } catch (error) {
      console.log('Error', error)
      
     }
    };
    fetchDetails();
  }, []);

  return (
    <div className='lg:w-1/2 xl:w-2/3 grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mb-6'>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe_id}
          recipe={recipe}
          handleCook={handleCook}
        ></Recipe>
      ))}
    </div>
  );
}

AllRecipes.propTypes = {
  handleCook: PropTypes.func.isRequired,
};

export default AllRecipes

