import React from 'react';
import './index.css';

function Recipes({ recipes }) {
  const exampleRecipes = [
    {id: 1, title: 'Brown Rice and Chicken'}, {id: 2, title: 'Tofu Stirfry'}
  ];
	return (
    <React.Fragment>
    {exampleRecipes.map(item => {
      return <Recipe key={item.id} title={item.title} />
    })}
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