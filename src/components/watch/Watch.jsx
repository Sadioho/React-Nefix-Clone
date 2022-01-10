import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import './watch.scss';
const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        controls
        src="https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4"
      />
    </div>
  );
};

export default Watch;
