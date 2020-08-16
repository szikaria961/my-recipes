import React from 'react';
import './index.css';

function Recipes({ recipes }) {
	return (
    <React.Fragment>
    {recipes.map(item => {
      return <Recipe
        key={item.id}
        title={item.title}
        ingredients={item.ingredients}
      />
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
      <div className="recipe-ingredients-title">Ingredients</div>
      <div className="recipe-ingredients">
        <ul>
          {ingredients.map((item, index) => {
            return (
              <li className="recipe-ingredients-item" key={index}>{item}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Recipes;