import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const[dataSaved, setDataSaved] = useState(false);

  async function handle(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://nodemailer-0v80.onrender.com/sendEmail", {
        name,
        email,
        message,
      });
      if (response.status === 200 && response.statusText === "Ok") {
        setDataSaved(!dataSaved);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
    {dataSaved ? <p>Email Sent</p> :""}
      <h1>Nodemailer App</h1>
      <form action="" onSubmit={handle}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name=""
          value={message}
          id=""
          placeholder="Enter your message"
          onChange={(e) => setMessage(e.target.value)}
        >
          {message}
        </textarea>

        <button type="submit">Send Email</button>
      </form>
    </>
  );
}

export default App;
