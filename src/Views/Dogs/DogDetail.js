import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchDogs, getDogsById } from '../../services/DogRoute';

export default function DogDetail() {
  const { id } = useParams();
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dogData = await fetchDogs();
      setDogs(dogData);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    getDogsById(id)
      .then(({ data }) => setDogs(data))
      .finally(() => setLoading(false));
  });
  if (loading) return <h2> loading </h2>;

  return (
    <>
      <ul>
        <li key={dogs.id} style={{ listStyleType: 'none' }}>
          {dogs.map((dog) => (
            <div key={dog.id}>
              <img src={dog.image}></img>
              <h2> {dog.bio} </h2>
            </div>
          ))}
        </li>
      </ul>
    </>
  );
}
