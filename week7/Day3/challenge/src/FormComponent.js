import React from "react";

function FormComponent({ data, handleChange, handleSubmit }) {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={data.firstName}
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={data.lastName}
        onChange={handleChange}
      />
      <br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={data.age}
        onChange={handleChange}
      />
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={data.gender === "male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={data.gender === "female"}
          onChange={handleChange}
        />
        Female
      </label>
      <br />

      <select
        name="destination"
        value={data.destination}
        onChange={handleChange}
      >
        <option value="">-- Choose Destination --</option>
        <option value="Japan">Japan</option>
        <option value="Brazil">Brazil</option>
        <option value="Kenya">Kenya</option>
      </select>
      <br />

      <label>
        <input
          type="checkbox"
          name="isLactoseFree"
          checked={data.isLactoseFree}
          onChange={handleChange}
        />
        Lactose Free?
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
    <hr />

    <h3>Entered information:</h3>
    <p>Name: {data.firstName} {data.lastName}</p>
    <p>Age: {data.age}</p>
    <p>Gender: {data.gender}</p>
    <p>Destination: {data.destination}</p>
    <p>
      Lactose Free: {data.isLactoseFree ? "Yes" : "No"}
    </p>
    </>
  );
}

export default FormComponent;
