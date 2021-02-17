import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import './index.css';

function RecipeList({ recipes }) {
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

function Recipe({
  cookTime,
  ingredients,
  instructions,
  prepTime,
  title
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="recipe">
      <div onClick={handleClick} className="recipe-title">
        {title}
      </div>
      {isOpen && (
        <React.Fragment>
          <div className="recipe-preptime-title">
            Prep Time:
          </div>
          <div className="recipe-preptime-item">
            <FontAwesomeIcon icon={faClock} />  {prepTime}
          </div>
          <div className="recipe-cooktime-title">
            Cook Time:
          </div>
          <div className="recipe-preptime-item">
            <FontAwesomeIcon icon={faClock} />  {cookTime}
          </div>
          <div className="recipe-ingredients-title">
            Ingredients
          </div>
          <div className="recipe-ingredients">
            <ul>
              {ingredients.map((item, index) => {
                return (
                  <li className="recipe-ingredients-item" key={index}>
                    {item}
                  </li>
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

export default RecipeList;
