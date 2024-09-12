import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const[send,setSend] = useState(false)

 function handle(e) {
    e.preventDefault();
    try {
       axios.post(`${import.meta.env.VITE_RENDER}/sendEmail`, {
        name,
        email,
        message,
      });
    } catch (e) {
      console.log(e);
    }

    setSend(true);
  }

  return (

    <div className=" w-full h-[100vh]  flex flex-col justify-center items-center">
{send &&
      <h1 className="text-4xl font-semibold text-green-500">Email Send Successfully !!</h1>
     }
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
          type="email"
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
