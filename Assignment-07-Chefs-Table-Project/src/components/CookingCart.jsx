import PropTypes from 'prop-types';

function CookingCart({ recipes, handlePreparingBtn, cookingItems, totalTime, totalCalories }) {
  return (
    <div className='lg:w-1/2 xl:w-1/3 border-[1px] border-gray-400 rounded-lg h-[600px] text-black text-center py-4'>
      <h3 className='text-2xl font-semibold'>
        Want to cook: {recipes.length}{' '}
      </h3>
      <div className='border-b-2 w-96 mx-auto my-4'></div>
      <div className='overflow-x-auto'>
        <table className='table mx-auto'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className='text-lg font-semibold text-black'>Name</th>
              <th className='text-lg font-semibold text-black'>Time</th>
              <th className='text-lg font-semibold text-black'>Calories</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, idx) => (
              <tr key={idx} className='bg-gray-100 font-fira-sans'>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparation_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => handlePreparingBtn(recipe)}
                    className='bg-success px-3 py-1 rounded-full mt-2 ml-[-50px]'
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* preparing items */}
      <div className='mt-6'>
        <h3 className='text-2xl font-semibold'>
          Currently Cooking: {cookingItems.length}{' '}
        </h3>
        <div className='overflow-x-auto'>
          <table className='table mx-auto'>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className='text-lg font-semibold text-black'>Name</th>
                <th className='text-lg font-semibold text-black'>Time</th>
                <th className='text-lg font-semibold text-black'>Calories</th>
              </tr>
            </thead>
            <tbody>
              {cookingItems.map((item, idx) => (
                <tr key={idx} className='bg-gray-100 font-fira-sans'>
                  <th>{idx + 1}</th>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparation_time}</td>
                  <td>{item.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* calculate time and calories */}
      <div className='pt-4 flex gap-4 justify-end mr-4'>
        <p>Total Time = {totalTime} </p>
        <p>Total Calories = {totalCalories} </p>
      </div>
    </div>
  );
}

CookingCart.propTypes = {
  recipes: PropTypes.array.isRequired,
  handlePreparingBtn: PropTypes.func.isRequired,
  cookingItems: PropTypes.array.isRequired,
  totalTime: PropTypes.number,
  totalCalories: PropTypes.number,
};

export default CookingCart;
