import React from "react";

export default function Members(props) {
  return (
    <div className="member-list">
      {props.list.map(member => (
        <div className="member" key={member.id}>
          <h2>Name: {member.name}</h2>
          <h2>Email: {member.email}</h2>
          <h2>Position: {member.position}</h2>
        </div>
      ))}
    </div>
  );
}
