import React, { Component } from 'react';
import data from '../data.json';

class Example2 extends Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        {data.Skills.map((skillArea, index) => (
          <div key={index}>
            <h3>{skillArea.Area}</h3>
            <ul>
              {skillArea.SkillSet.map((skill, i) => (
                <li key={i}>
                  {skill.Name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
