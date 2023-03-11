import React from 'react';

function Project({ projects }) {
  const randomProject = projects[Math.floor(Math.random() * projects.length)];
  return (
    <div style={{backgroundColor: "#E8E3D2"}}>
      <h1 style={{backgroundColor:"#E8E3D2"}}>{randomProject.title}</h1>
      <ul>
        {randomProject.descriptions.map((description, index) => (
          <li key={index}>{description} </li>
        ))}
      </ul>
    </div>
  );
}

export default Project;