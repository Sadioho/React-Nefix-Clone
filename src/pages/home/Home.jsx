import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? '?type=' + type : ''}${genre ? 'genre=' + genre : ''}`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGQ1ZDEwZjIzYTUxYjNjMGVlYzhlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjEyNjgyNywiZXhwIjoxNjQyNTU4ODI3fQ.K3NlkC5PsIeNuVjwT-fvvUfPW6rpZIaepGgo5gtnYAY',
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((item, index) => (
        <List key={index} list={item} />
      ))}
    </div>
  );
};

export default Home;
