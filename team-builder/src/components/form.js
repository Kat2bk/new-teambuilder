import React, { useState } from "react";

export default function MemberForm(props) {
  console.log("I am the props for form", props);
  const [formState, setFormState] = useState({
    id: "",
    name: "",
    email: "",
    position: ""
  });

  function onChange(event) {
    console.log(formState);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  }

  function Submit(event) {
    event.PreventDefault();
  }

  return (
    <form onSubmit={Submit}>
      <p>Enter your data:</p>
    </form>
  );
}
