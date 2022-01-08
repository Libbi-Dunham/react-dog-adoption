import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import Dog from '../../Components/DogCard/Dogs';
import { getDogsById, deleteDog } from '../../services/DogRoute';

export default function DogDetail() {
  const { id } = useParams();
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const dogData = await getDogsById(id);
      setDog(dogData);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h2> Here They Come Running! </h2>;

  const handleDelete = async (e) => {
    try {
      await deleteDog(id);
      alert('You Have Successfully Deleted A dog!');
    } catch {
      alert('Oh No You Have No Success!');
    }
    e.preventDefault();
    history.push('/');
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
