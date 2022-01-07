import React from 'react';
import './listItem.scss';
const ListItem = ({ item, itemRef }) => {
  return (
    <div ref={itemRef} className="listItem">
      item {item}
    </div>
  );
};

export default ListItem;
