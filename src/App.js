import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    tech: false,
    art: false,
    sports: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div>
      <h1>Hi, I'm Your Name</h1>
      <img src="https://via.placeholder.com/350" alt="My profile pic" />
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h3>Interests:</h3>
      <label>
        <input
          name="tech"
          type="checkbox"
          checked={interests.tech}
          onChange={handleCheckboxChange}
        />
        Technology
      </label>
      <label>
        <input
          name="art"
          type="checkbox"
          checked={interests.art}
          onChange={handleCheckboxChange}
        />
        Art
      </label>
      <label>
        <input
          name="sports"
          type="checkbox"
          checked={interests.sports}
          onChange={handleCheckboxChange}
        />
        Sports
      </label>

      <div>
        <a href="https://github.com/yourusername">GitHub</a>
        <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
      </div>

      <h1>Newsletter Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            placeholder="Enter your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {name && email && <p>{name} - {email}</p>}
      {interests.tech && <p>Interested in Technology</p>}
      {interests.art && <p>Interested in Art</p>}
      {interests.sports && <p>Interested in Sports</p>}
    </div>
  );
}

export default App;
