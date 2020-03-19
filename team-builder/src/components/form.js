import React, { useState } from "react";

export default function MemberForm(props) {
  console.log("I am the props for form", props);
  const [formState, setFormState] = useState({
    id: "",
    name: "",
    email: "",
    position: ""
  });

  function handleChange(event) {
    console.log(formState);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  }

  function Submit(event) {
    event.PreventDefault();
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
    </form>
  );
}
