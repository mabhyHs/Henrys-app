import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../Redux/actions/actions';
import './ReviewsContainer.css';
import Carousel from 'react-bootstrap/Carousel';
import ReviewCard from './ReviewCard/ReviewCard';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';

function ReviewsContainer() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const dispatch = useDispatch();
  const allReviews = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);
  console.log(allReviews);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {allReviews.map((e) => {
        return (
          <CarouselItem key={e.id}>
            <ReviewCard
              rating={e.rating}
              description={e.description}
              author={e.author}
            />
          </CarouselItem>
        );
      })}
    </Carousel>
  );
}

export default ReviewsContainer;
