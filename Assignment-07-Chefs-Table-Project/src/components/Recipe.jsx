import PropTypes from 'prop-types';
import { CiTimer } from 'react-icons/ci';
import { AiTwotoneFire } from 'react-icons/ai';

function Recipe({recipe, handleCook }) {
  const {
    recipe_img,
    recipe_name,
    short_description,
    ingredients,
    preparation_time,
    calories,
  } = recipe;
  return (
    <div className=''>
      <div className='card bg-slate-50 shadow-xl mb-2 pt-8 border-[1px] border-gray-300 h-[600px]'>
        <figure>
          <img
            className='w-[200px] rounded-xl'
            src={recipe_img}
            alt={`This is the image of ${recipe_name}`}
          />
        </figure>
        <div className='card-body text-black'>
          <h2 className='text-lg font-semibold'>{recipe_name}</h2>
          <p className='opacity-70 font-fira-sans'>{short_description}</p>
          <hr />
          <div>
            <h5 className='text-lg mb-2'>Ingredients: {ingredients.length}</h5>
            {ingredients.slice(0, 3).map((ingredient, idx) => (
              <li key={idx} className='opacity-60 font-fira-sans'>
                {ingredient}
              </li>
            ))}
          </div>
          <hr />
          <div className='flex opacity-60 font-fira-sans'>
            <p className='flex items-center gap-1'>
              <CiTimer />
              {preparation_time} minutes
            </p>
            <p className='flex items-center gap-1'>
              <AiTwotoneFire />
              {calories} calories
            </p>
          </div>
          <hr />
          <div className='card-actions'>
            <button
              onClick={() => handleCook(recipe)}
              className='btn btn-success rounded-full mt-2'
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleCook: PropTypes.func.isRequired,
};

export default Recipe;
