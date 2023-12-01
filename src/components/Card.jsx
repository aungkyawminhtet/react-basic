import React from "react";

const Card = ({user, remove}) => {
    const removeUsr = () => {
        remove(user.uuid);
    };
  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-2">
          <img
            src={user.image}
            alt="people"
            width={50}
            height={50}
          />
        </div>
        <div className="col-3">
            <h4>{user.name}</h4>
        </div>
        <div className="col-5 text-center">
          <strong>{user.cell}</strong><br />
          <strong>{user.phone}</strong>
        </div>
        <div className="col-2">
          <button className="btn btn-danger btn-sm mt-2" onClick={removeUsr}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
