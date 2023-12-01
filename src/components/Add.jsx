import React, { useState } from "react";

const Add = ({add}) => {
  let [image, setImage] = useState("");
  let [name, setName] = useState("");
  let [cell, setCell] = useState("");
  let [phone, setPhone] = useState("");
  let [uuid, setUuid] = useState("");

  const imageHandler = (event) => {
    setImage(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const cellHandler = (event) => {
    setCell(event.target.value);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };
  const uuidHandler = (event) => {
    setUuid(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let user = {
      name: name,
      phone: phone,
      cell: cell,
      image: image,
      uuid: uuid
    };
    add(user);

    // props.adduser(user);
  };

  return (
    <div className="bg-secondary p-3">
      <h3>Add User</h3>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={nameHandler}
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cell" className="form-label">
            Cell
          </label>
          <input
            type="text"
            className="form-control"
            onChange={cellHandler}
            id="cell"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            onChange={phoneHandler}
            id="phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            onChange={imageHandler}
            id="image"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="uuid" className="form-label">
            UUid
          </label>
          <input
            type="text"
            className="form-control"
            onChange={uuidHandler}
            id="uuid"
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
