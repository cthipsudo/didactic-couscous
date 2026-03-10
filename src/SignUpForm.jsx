import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const handleChange = (evt) => {
    const fieldName = evt.target.name;
    const value = evt.target.value;
    setFormData((formData) => {
      formData[fieldName] = value;
      return { ...formData };
    });
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div>
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        id="firstname"
      />
      <label htmlFor="lastname">Last Name:</label>
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        id="lastname"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SignupForm;
