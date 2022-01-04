import { Link } from 'react-router-dom';
import React from 'react';

export default function Dogs({ dog: { id, created_at, name, image, breeds, bio } }) {
  return (
    <div className="dog">
      <Link to={`/dogs/${id}`}></Link>
      <h2>Name: {name}</h2>
      <h3>{image}</h3>
      <h3>Breeds: {breeds}</h3>
      <h3>Bio: {bio}</h3>
      <h3>Created: {created_at}</h3>
    </div>
  );
}
