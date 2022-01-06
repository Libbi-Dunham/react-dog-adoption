import React, { useState, useEffect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DogForm from '../../Components/DogCard/DogForm';
import { fetchDogById } from '../../services/DogRoute';

export default function DogEdit() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchDogById(params.id);
      setName(response.name);
      setBio(response.bio);
      setImage(response.image);
      setAge(response.age);
      setBreed(response.breed);
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Edit</h1>
      <DogForm
        name={name}
        setName={setName}
        bio={bio}
        setBio={setBio}
        image={image}
        setImage={setImage}
        age={age}
        setAge={setAge}
        breed={breed}
        setBreed={setBreed}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
