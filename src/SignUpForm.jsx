import { useState } from "react";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updateFirstName = (evt) => {
    setFirstName(evt.target.value);
  };
  const updateLastName = (evt) => {
    setLastName(evt.target.value);
  };
  return (
    <div>
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={updateFirstName}
        id="firstname"
      />
      <label htmlFor="lastname">Last Name:</label>
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={updateLastName}
        id="lastname"
      />
      <button>Submit</button>
    </div>
  );
}

export default SignupForm;
