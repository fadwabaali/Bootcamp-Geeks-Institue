import './App.css';
import { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVoting = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="App">
      <h1>Vote for your language</h1>
      {languages.map((language, index) => (
        <div className='container' key={index}>
          <h2>{index + 1}.{language.name}</h2>
          <p>Votes: {language.votes}</p>
          <button onClick={() => handleVoting(index)}>Click Me!</button>
        </div>
      ))}
    </div>
  );
}

export default App;
