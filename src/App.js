import React from 'react';
import RecipeList from './pages/recipes';
import recipes from './data/recipes.json';
import Header from './components/header';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <div className="app-content">
          <Header title='My Recipes' />
          <RecipeList recipes={recipes.recipes} />
        </div>
      </div>
    </div>
  );
}

export default App;
