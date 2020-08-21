import React, { useState } from 'react';
import './index.css';

function Recipes({ recipes }) {
	return (
    <React.Fragment>
    {recipes.map(item => {
      return <Recipe
        key={item.id}
        title={item.title}
        prepTime={item.prepTime}
        cookTime={item.cookTime}
        ingredients={item.ingredients}
        instructions={item.instructions}
      />
    })}
    </React.Fragment>
	);
}

function Recipe({ title, prepTime, cookTime, ingredients, instructions }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <div className="recipe">
      <div onClick={handleClick} className="recipe-title">
        {title}
      </div>
      {isOpen && (
        <React.Fragment>
          <div className="recipe-preptime-title"> Prep Time: </div>
          <div className="recipe-preptime-item"> {prepTime}</div>
          <div className="recipe-cooktime-title"> Cook Time:</div>
          <div className="recipe-preptime-item"> {cookTime}</div>
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

          <div className="recipe-instructions-title">Instructions</div>
          <div className="recipe-instructions">
            <ol>
              {instructions.map((item, index) => {
                return (
                  <li className="recipe-instructions-item" key={index}>{item}</li>
                );
              })}
          </ol>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Recipes;