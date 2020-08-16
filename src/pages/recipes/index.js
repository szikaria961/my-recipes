import React from 'react';
import './index.css';

function Recipes({ recipes }) {
	return (
    <React.Fragment>
    {recipes.map(item => {
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