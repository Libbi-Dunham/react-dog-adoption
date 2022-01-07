import React, { useState } from 'react';
import { addDog } from '../../services/DogRoute';
import DogForm from '../../Components/DogCard/DogForm';
import { useHistory } from 'react-router-dom';

export default function CreateDog() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      alert('You Have Successfully Added A dog!');
    } catch {
      alert('Oh No You Have No Success!');
    }
    e.preventDefault();
    await addDog(name, bio, image, age, breed);
    history.push('/');
  };

  return (
    <div>
      <h1>Add a new Dog</h1>
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
