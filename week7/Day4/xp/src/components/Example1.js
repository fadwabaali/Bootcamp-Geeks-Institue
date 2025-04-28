import React, { Component } from 'react';
import data from '../data.json';

class Example1 extends Component {
  render() {
    return (
      <div>
        <h2>Social Medias</h2>
        {data.SocialMedias.map((media, index) => (
          <ul key={index}>
            <li>{media}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Example1;
