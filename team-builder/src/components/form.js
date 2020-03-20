import React, { useState } from "react";

export default function MemberForm(props) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    position: ""
  });

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  }

  function Submit(event) {
    event.preventDefault();
    props.data(formState);
    setFormState({ name: "", email: "", position: "" });
  }

  return (
    <form onSubmit={Submit}>
      <p>Enter your data:</p>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChange}
        value={formState.name}
      />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChange}
        value={formState.email}
      />
      <br />
      <label htmlFor="position">Position: </label>
      <input
        id="position"
        type="text"
        name="position"
        onChange={handleChange}
        value={formState.position}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
