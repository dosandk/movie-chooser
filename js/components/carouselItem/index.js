import React from 'react';

const CarouselItem = ({movieItem, onItemClick}) => {
  return (
    <div onClick={onItemClick}>
      {movieItem.title}
    </div>
  );
};

export default CarouselItem;
