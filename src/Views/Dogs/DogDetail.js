import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Dog from '../../Components/DogCard/Dogs';
import { getDogsById } from '../../services/DogRoute';

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

  // useEffect(() => {
  //   getDogsById(id)
  //     .then(({ data }) => setDogs(data))
  //     .finally(() => setLoading(false));
  // });
  if (loading) return <h2> loading </h2>;

  return (
    // <div>
    //   <Dog {...dogs} />
    // </div>
    <>
      <ul>
        <li style={{ listStyleType: 'none' }}>
          <Dog {...dog} />
          {/* {dog.map((dog) => (
            <div key={dog.id}>
              <img src={dog.image}></img>
              <h2> {dog.bio} </h2>
            </div>
          ))} */}
        </li>
      </ul>
    </>
  );
}
