import React from 'react';

const recipe = {
  title: 'Brown Rice and Chicken'
}

function App() {
  return (
    <React.Fragment>
      <Recipe title={'Tofu stirfry'} />
      <Recipe title={recipe.title} />
    </React.Fragment>
  );
}

function Recipe({ title, ingredients, instructions }) {
  return (
    <div className="recipe-title">
      {title}
    </div>
  );
}

export default App;
