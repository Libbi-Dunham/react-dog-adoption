import { Link } from 'react-router-dom';
import React from 'react';

export default function Dogs({ dog: { id } }) {
  return (
    <div className="dog">
      <Link to={`/dogs/${id}`}></Link>
    </div>
  );
}
