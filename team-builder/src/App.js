import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Member from "./components/member";

function App() {
  const [members, setMembers] = useState([]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      position: member.position
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>Teammate List</h1>
      <h2>Add your name!</h2>
      <Form data={addNewMember} />
      <Member data={members} />
    </div>
  );
}

export default App;
