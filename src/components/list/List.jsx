import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';
import React, { useRef, useState } from 'react';
import ListItem from '../listItem/ListItem';
import './list.scss';
import _get from 'lodash/get';
import _size from 'lodash/size';
const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(1);

  const listRef = useRef();
  const itemRef = useRef();
  const dataArray = _get(list, 'content');

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
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick('left')}
          style={{ display: slideNumber === 1 && 'none' }}
        />
        <div className="container" ref={listRef}>
          {dataArray.map((item, index) => (
            <ListItem item={item} itemRef={itemRef} key={index} index={index} />
          ))}
        </div>
        {_size(dataArray) > 5 && (
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick('right')}
            style={{ display: slideNumber === dataArray.length - 5 && 'none' }} // 5 : number slider display
          />
        )}
      </div>
    </div>
  );
};

export default List;
