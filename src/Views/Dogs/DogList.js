import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../../services/DogRoute';
import { Link } from 'react-router-dom';

export default function DogList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dogData = await fetchDogs();
      setDogs(dogData);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Say Hi to Each Dog!</h1>
      <ul>
        {dogs.map((dog) => (
          <div key={dog.id}>
            <Link key={dog.id} to={`/dogs/${dog.id}`}>
              <img src={dog.image}></img>
            </Link>
            <h2>
              {dog.name} is a {dog.age} year old {dog.breed}
            </h2>
          </div>
        ))}
      </ul>
    </>
  );
}
