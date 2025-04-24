import React, { useState } from "react";
import FormComponent from "./FormComponent";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    isLactoseFree: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const query = new URLSearchParams({
      ...formData,
      isLactoseFree: formData.isLactoseFree ? "lactoseFree" : "",
    }).toString();
    window.location.href = "http://localhost:3000/?" + query;
  }

  return (
    <FormComponent
      data={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;
