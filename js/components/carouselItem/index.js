import React from 'react';

const CarouselItem = ({movieItem, onItemClick}) => {
  return (
    <div onClick={onItemClick}>
      {movieItem.Title}
    </div>
  );
};

export default CarouselItem;
