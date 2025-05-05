import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const counterRef = useRef(null);

  const handleInputChange = () => {
    counterRef.current.textContent = `Characters: ${inputRef.current.value.length}`;
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Character Counter</h2>
      <input
        type="text"
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      />
      <div
        ref={counterRef}
        style={{ textAlign: "right", fontSize: "14px", color: "#666" }}
      >
        Characters: 0
      </div>
    </div>
  );
}

export default App;