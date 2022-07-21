import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showForm, setShowForm] = useState(false);

  const handleNameChange = event => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("okoko");
    console.log(event);
    console.log(event.target.name.value);
  };

  return (
    <div className="App">
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Jean Dupont" />
        </div>
        <div className="field">
          <label htmlFor="mail">Email</label>
          <input
            type="text"
            name="mail"
            value={email}
            onChange={handleEmailChange}
            placeholder="jeandupont@lereacteur.io" />
        </div>
        <div className="field">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="pass"
            value={password}
            onChange={handlePasswordChange}
            placeholder="lErEaCtEuR2020" />
        </div>
        <div className="field">
          <label htmlFor="confirm">Confirm your Password</label>
          <input type="password" name="confirm" placeholder="lErEaCtEuR2020" />
        </div>
        <input onClick={() => {
          setShowForm(true);
        }} type="submit" value="Register" />
      </form>
      <div>

        {showForm && (
          <p>
            {name} {email} {password}
          </p>
        )}
      </div>
    </div >
  );
}

export default App;
