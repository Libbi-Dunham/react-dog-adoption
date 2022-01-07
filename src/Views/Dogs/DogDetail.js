import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Dog from '../../Components/DogCard/Dogs';
import { getDogsById, deleteDog } from '../../services/DogRoute';

export default function DogDetail() {
  const { id } = useParams();
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dogData = await getDogsById(id);
      setDog(dogData.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h2> loading </h2>;
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteDog(id);
  };

  return (
    <>
      <ul>
        <li style={{ listStyleType: 'none' }}>
          <Dog {...dog} handleDelete={handleDelete} />
        </li>
      </ul>
    </>
  );
}
