import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../../services/DogRoute';
import { Link } from 'react-router-dom';

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dogData = await fetchDogs();
      setLoading(false);
      setDogs(dogData);
    };
    fetchData();
  }, []);
  if (loading) return <h2> Loading Your New Friends </h2>;

  return (
    <>
      <h1>Say Hi to Each Dog!</h1>
      <div className="dog-list">
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
      </div>
    </>
  );
}
