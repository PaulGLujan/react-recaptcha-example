import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({ fname: "", lname: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value={formData["fname"]} onChange={handleInput} />
      <br />
      <label htmlFor="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value={formData["lname"]} onChange={handleInput} />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default App;
