import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { addUser } from "../services/users";

const AddUserForm = () => {
  const recaptchaRef = React.createRef();
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName } = formData;
    const reCaptchaToken = await recaptchaRef.current.executeAsync();
    addUser(reCaptchaToken, firstName, lastName);
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
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="6LfsEdMZAAAAAJ1LzqFvh-inbRmOtUmR72Re922U"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddUserForm;
