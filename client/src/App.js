import React, { useState } from "react";
import { addUser } from "./services/users";

const App = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = formData;
    addUser(firstName, lastName);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name:</label>
      <br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData["firstName"]}
        onChange={handleInput}
      />
      <br />
      <label htmlFor="lastName">Last name:</label>
      <br />
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData["lastName"]}
        onChange={handleInput}
      />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default App;
