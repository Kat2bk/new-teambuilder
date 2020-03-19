import React, { useState } from "react";

export default function MemberForm(props) {
  console.log("I am the props for form", props);
  const [formState, setFormState] = useState({
    id: "",
    name: "",
    email: "",
    position: ""
  });
}
