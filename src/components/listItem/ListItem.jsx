import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './listItem.scss';
import _get from 'lodash/get';
import { Link } from 'react-router-dom';
const ListItem = ({ index, itemRef, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/' + item, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGQ1ZDEwZjIzYTUxYjNjMGVlYzhlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjEyNjgyNywiZXhwIjoxNjQyNTU4ODI3fQ.K3NlkC5PsIeNuVjwT-fvvUfPW6rpZIaepGgo5gtnYAY',
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  return (
    <Link to="/watch" state={{ movie: movie }}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ left: isHovered && index * 290 - 50 + index * 3 }}
        ref={itemRef}
        className="listItem"
      >
        <img src={_get(movie, 'img')} alt="" />
        {isHovered && (
          <>
            <video src={_get(movie, 'trailer')} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{_get(movie, 'duration')}</span>
                <span className="limit">+{_get(movie, 'limit')}</span>
                <span>{_get(movie, 'year')}</span>
              </div>
              <div className="desc">{_get(movie, 'desc')}</div>
              <div className="genre">{_get(movie, 'genre')}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
