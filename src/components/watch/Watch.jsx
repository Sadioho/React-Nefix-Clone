import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './watch.scss';
import _get from 'lodash/get';
const Watch = () => {
  const location = useLocation();
  const movie = _get(location, 'state.movie');
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay controls src={_get(movie, 'video')} />
    </div>
  );
};

export default Watch;
