import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { addDog } from '../../services/DogRoute';

// export default function Admin() {
//   return (
//     <div>
//       <Link to="/admin">Admin</Link>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import DogForm from '../../Components/DogCard/DogForm';
// import { getDogsById, updateDog } from '../../services/DogRoute';

export default function CreateDog() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');

  // const params = useParams();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getDogsById(params.id);
  //     setName(response.name);
  //     setBio(response.bio);
  //     setImage(response.image);
  //     setAge(response.age);
  //     setBreed(response.breed);
  //   };
  //   fetchData();
  // }, [params.id]);

  const handleSubmit = async (e) => {
    try {
      alert('You Have Successfully Added A dog!');
    } catch {
      alert('Oh No You Have No Success!');
    }
    e.preventDefault();
    await addDog(name, bio, image, age, breed);
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
