import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';
import React, { useLayoutEffect, useRef, useState } from 'react';
import ListItem from '../listItem/ListItem';
import './list.scss';
const List = () => {
  const [slideNumber, setSlideNumber] = useState(1);

  const listRef = useRef();
  const itemRef = useRef();
  const dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const handleClick = (direction) => {
    const demo = +itemRef.current.scrollWidth + 5; // 5 margin right 
    console.log(demo);
    if (direction === 'left' && slideNumber > 1) {
      setSlideNumber(slideNumber - 1);
      const prev = slideNumber - 1;
      listRef.current.style.transform = `translateX(${demo * -(prev - 1)}px)`;
    }
    if (direction === 'right' && slideNumber < dataArray.length - 1) {
      const next = slideNumber + 1;
      setSlideNumber(next);
      listRef.current.style.transform = `translateX(${-demo * slideNumber}px)`;
    }
    console.log(slideNumber);
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick('left')}
          style={{ display: slideNumber === 1 && 'none' }}
        />
        <div className="container" ref={listRef}>
          {dataArray.map((item, index) => (
            <ListItem itemRef={itemRef} key={index} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick('right')}
          style={{ display: slideNumber === dataArray.length - 5 && 'none' }} // 5 : number slider display
        />
      </div>
    </div>
  );
};

export default List;
