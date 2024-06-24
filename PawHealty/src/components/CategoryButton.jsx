import React from 'react';

const CategoryButton = ({ onSelectCategory }) => {
  return (
    <div className="category-button">
      <button onClick={() => onSelectCategory('all')}>Semua</button>
      <button onClick={() => onSelectCategory('hospital')}>Rumah Sakit</button>
      <button onClick={() => onSelectCategory('clinic')}>Klinik</button>
    </div>
  );
};

export default CategoryButton;
