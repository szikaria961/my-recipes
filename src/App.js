import React from 'react';
import Recipes from './pages/recipes';
import recipes from './data/recipes.json';
import Header from './components/header'

function App() {
  return (
    <React.Fragment>
      <Header title='My Recipes' />
      <Recipes recipes={recipes} />
    </React.Fragment>
  );
}

export default App;
