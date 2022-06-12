
import React, { useState } from "react";
import UserDataService from "../services/UserService";

const AddUser = () => {
  const initialUserState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const saveUser = () => {
    var data = {
      title: user.title,
      description: user.description
    };
    UserDataService.create(data)
      .then(response => {
        setUser({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
    {submitted ? (
      <div>
        <h4>You submitted successfully!</h4>
        <button className="btn btn-success" onClick={newUser}>
          Add
        </button>
      </div>
    ) : (
      <div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={user.title}
            onChange={handleInputChange}
            name="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            required
            value={user.description}
            onChange={handleInputChange}
            name="description"
          />
        </div>
        <button onClick={saveUser} className="btn btn-success">
          Submit
        </button>
      </div>
    )}
  </div>
  );
};
export default AddUser;