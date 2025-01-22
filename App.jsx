import React, { useState } from 'react';

const App = () => {
  const [randomName, setRandomName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addUserResult, setAddUserResult] = useState('');
  const [fetchUserResult, setFetchUserResult] = useState('');

  const baseUrl = 'http://localhost:3002';

  // Function to add a new user
  const addUser = async () => {
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ randomName }),
      });
      const result = await response.text();
      setAddUserResult(result);
    } catch (error) {
      setAddUserResult(`Error: ${error.message}`);
    }
  };

  // Function to fetch user data
  const fetchUser = async () => {
    try {
      const queryParams = new URLSearchParams({ username, email, phone }).toString();
      const response = await fetch(`${baseUrl}/fetch?${queryParams}`);
      const result = await response.text();
      setFetchUserResult(result);
    } catch (error) {
      setFetchUserResult(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Mongoose App Frontend</h1>

      {/* Add New User Section */}
      <section>
        <h2>Add New User</h2>
        <input
          type="text"
          placeholder="Enter Random Name"
          value={randomName}
          onChange={(e) => setRandomName(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={addUser} style={{ padding: '5px 10px' }}>
          Submit
        </button>
        <p>{addUserResult}</p>
      </section>

      <hr />

      {/* Fetch User Data Section */}
      <section>
        <h2>Fetch User Data</h2>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Enter Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={fetchUser} style={{ padding: '5px 10px' }}>
          Fetch
        </button>
        <p>{fetchUserResult}</p>
      </section>
    </div>
  );
};

export default App;
