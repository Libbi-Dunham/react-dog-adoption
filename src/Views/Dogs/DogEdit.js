import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DogForm from '../../Components/DogCard/DogForm';
import { getDogsById, updateDog } from '../../services/DogRoute';

export default function DogEdit() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getDogsById(params.id);
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
    await updateDog(params.id, name, bio, image, age, breed);
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
