import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import './listItem.scss';
const ListItem = ({ index, itemRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 290 - 50 + index * 3 }}
      ref={itemRef}
      className="listItem"
    >
      <img
        src="https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfG5xUOsJ_aW2WtKnlXw2-FDb_iXfXOBQ_fKs699SEhxyt5Z3AWaoM1FWWs1lskD2cpEjjspbY8ZgMRd9g7jHAhnmKA8EpU6emUNJMXUn1kC1HPLB3A6rWK2S9v0.jpg?r=9e8"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              unde minus sapiente porro aperiam eligendi pariatur natus, neque
              animi.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
