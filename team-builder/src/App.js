import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Member from "./components/member";

function App() {
  const [members, setMembers] = useState([
    {
      id: Date.now(),
      name: "Katherine",
      email: "Kat@Kat.com",
      position: "Full-Stack"
    }
  ]);

  const addNewMember = member => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
      <h1>Teammate List</h1>
      <h2>Add your name!</h2>
      <Form data={addNewMember} />
      <Member list={members} />
    </div>
  );
}

export default App;
