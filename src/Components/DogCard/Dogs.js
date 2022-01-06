import { Link } from 'react-router-dom';
import React from 'react';

export default function Dogs({ id, name, image, bio }) {
  return (
    <div className="dog">
      {/* <Link to={`/dogs/${id}`}></Link> */}
      <h2> {name} </h2>
      <img src={image}></img>
      <h2> {bio} </h2>
      <Link to={`/dogs/${id}/DogEdit`}>Edit</Link>
    </div>
  );
}
