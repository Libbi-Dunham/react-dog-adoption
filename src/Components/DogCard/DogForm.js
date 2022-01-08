import React from 'react';

export default function DogForm({
  name,
  setName,
  bio,
  setBio,
  image,
  setImage,
  age,
  setAge,
  breed,
  setBreed,
  handleSubmit,
}) {
  return (
    <div className="dog-form">
      <form>
        <h3>Enter A New Dog</h3>
        <div className="form-control">
          <label>Name: </label>
          <input
            className="control"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div classsName="form-control">
          <label>Bio: </label>
          <textarea
            className="control"
            placeholder="bio"
            type="text"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Age: </label>
          <input
            className="control"
            placeholder="number"
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Image: </label>
          <input
            className="control"
            placeholder="Image URL"
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Breed: </label>
          <input
            className="control"
            placeholder="breed"
            type="text"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
        </div>
        <br></br>
        <br></br>
        <div className="action">
          <button className="save" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
