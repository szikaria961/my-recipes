import React from 'react';
import './index.css';

function Recipes({ recipes }) {
  const exampleRecipe = {
    title: 'Brown Rice and Chicken'
  }
	return (
    <React.Fragment>
      <Recipe title={exampleRecipe.title} />
    </React.Fragment>
	);
}

function Recipe({ title, ingredients, instructions }) {
  return (
    <div className="recipe">
      <div className="recipe-title">
        {title}
      </div>
    </div>
  );
}

export default Recipes;