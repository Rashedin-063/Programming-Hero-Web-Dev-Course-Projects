import { useState } from 'react';
import './App.css';
import AllRecipes from './components/AllRecipes';
import Banner from './components/Banner';
import CookingCart from './components/CookingCart';
import Nav from './components/Nav';
import Title from './components/Title';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // useState
  const [recipes, setRecipes] = useState([]);
  const [cookingItems, setCookingItems] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  // handle button onclick
  const handleCook = (recipe) => {
    const isExist = recipes.find((data) => data.recipe_id === recipe.recipe_id);
    if (!isExist) {
      const newRecipes = [...recipes, recipe];
      setRecipes(newRecipes);
    } else {
      toast.error('This item is already added');
    }
  };

  // const handlePreparingBtn = (recipe) => {
  //   const isExist = cookingItems.find(
  //     (item) => item.recipe_id === recipe.recipe_id
  //   );
  //   if (!isExist) {
  //     const newCookingItem = [...cookingItems, recipe];
  //     setCookingItems(newCookingItem);
  //   } else {
  //     toast.error('This item is already added');
  //   }
  // };

  const handlePreparingBtn = (recipe) => {
    const remainingRecipes = recipes.filter(
      (item) => item.recipe_id !== recipe.recipe_id
    );
    setRecipes(remainingRecipes);

      const newCookingItem = [...cookingItems, recipe];
    setCookingItems(newCookingItem);
    
     setTotalTime(totalTime + recipe.preparation_time);
     setTotalCalories(totalCalories + recipe.calories);
  } 

  return (
    <div className='bg-white min-h-screen'>
      <ToastContainer />
      <header className='max-w-7xl mx-auto'>
        <Nav></Nav>
        <Banner></Banner>
      </header>
      <main className='max-w-7xl mx-auto my-8'>
        <Title></Title>
        <div className='mt-10 lg:flex justify-between gap-8 mx-2'>
          <AllRecipes
            handleCook={handleCook}></AllRecipes>
          <CookingCart
            recipes={recipes}
            cookingItems={cookingItems}
            handlePreparingBtn={handlePreparingBtn}
            totalTime={totalTime}
            totalCalories={totalCalories}
          ></CookingCart>
        </div>
      </main>
    </div>
  );
}

export default App;
