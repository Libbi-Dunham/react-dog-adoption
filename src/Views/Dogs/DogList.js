import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../../services/DogRoute';
import { Link } from 'react-router-dom';

export default function DogList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dogData = await fetchDogs();
      setDogs(dogData);
      console.log(dogData);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Dogs</h1>
      <ul>
        {dogs.map((dog) => (
          <Link key={dog.id} to={`/dogs/${dog.id}`}>
            <img src={dog.image}></img>
          </Link>
        ))}
      </ul>
    </>
  );
}
