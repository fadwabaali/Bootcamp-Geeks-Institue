// App.js
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import BuggyCounter from './components/BuggyCounter';
import ColorComponent from './components/ColorComponent';



function App() {
  return (
    <div>
      <h2>Click the counter to crash it at 5!</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h2>React Lifecycle - Updating Phase</h2>
      <ColorComponent />
    </div>
  );
}

export default App;
