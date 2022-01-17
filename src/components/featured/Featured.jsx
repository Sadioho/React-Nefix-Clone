import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './featured.scss';
const Featured = ({ type }) => {
  const [content, setContent] = useState({});
  console.log(content);
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGQ1ZDEwZjIzYTUxYjNjMGVlYzhlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjEyNjgyNywiZXhwIjoxNjQyNTU4ODI3fQ.K3NlkC5PsIeNuVjwT-fvvUfPW6rpZIaepGgo5gtnYAY',
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow fontSize="large" />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined fontSize="large" />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
