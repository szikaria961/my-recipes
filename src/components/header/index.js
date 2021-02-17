import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Header({ title }) {
  return (
    <div className="header-title">
      {title}
      <span className="recipe-header-icon">
        <FontAwesomeIcon icon={faUtensils} />
      </span>
    </div>
  );
}

export default Header;
