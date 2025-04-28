import React, { Component } from 'react';
import data from '../data.json';

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.companyName}</h3>
            <a href={exp.url} target="_blank" rel="noreferrer">
              <img src={exp.logo} alt="Company Logo" width="100" />
            </a>
            {exp.roles.map((role, i) => (
              <div key={i}>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p><strong>From:</strong> {role.startDate} - <strong>To:</strong> {role.endDate}</p>
                <p><strong>Location:</strong> {role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
