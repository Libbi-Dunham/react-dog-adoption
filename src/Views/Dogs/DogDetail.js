import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Dog from '../../Components/DogCard/Dogs';
import { fetchDogs } from '../../services/DogRoute';

export default function DogDetail() {
  const { id } = useParams();
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dogData = await fetchDogs();
      setLoading(false);
      setDogs(dogData);
    };
    fetchData();
  }, [id]);
  if (loading) return <h2> loading </h2>;

  return (
    <>
      <ul>
        <li key={dogs.id} style={{ listStyleType: 'none' }}>
          <Dog dog={dogs} />
        </li>
      </ul>
    </>
  );
}
