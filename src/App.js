import React from 'react';
import Recipes from './pages/recipes';
import recipes from './data/recipes.json';

function App() {
  return (
    <React.Fragment>
      <Recipes recipes={recipes} />
    </React.Fragment>
  );
}

export default App;
