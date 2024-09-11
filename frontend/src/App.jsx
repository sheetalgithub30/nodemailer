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
      setDataSaved(!dataSaved);

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className=" w-full h-[100vh]  flex flex-col justify-center items-center">
    {dataSaved ? <p>Email Sent</p> :""}
      <h1 className="font-bold text-4xl">Nodemailer App</h1>
      <form action="" onSubmit={handle} className="border-2 border-gray-400 p-4 flex flex-col justify- m-4 text-xl rounded-2xl shadow-xl	shadow-gray-500">
        <input
        className="border-2 border-gray-600 p-2 m-2"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
        className="border-2 border-gray-600 p-2 m-2"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
        className="border-2 border-gray-600 p-2 m-2"
          name=""
          value={message}
          id=""
          placeholder="Enter your message"
          onChange={(e) => setMessage(e.target.value)}
        >
          {message}
        </textarea>

        <button type="submit" className="bg-blue-800 text-white text-2xl p-2 my-4 rounded-2xl">SEND EMAIL</button>
      </form>
    </div>
  );
}

export default App;
