import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/items";
import Navbar from "./components/Navbar";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    desc: "",
    date: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/transactions", {
      method: "POST",
      body: form,
    });
    console.log(response);
  };

  const handleInput = (e) => {
    // const { name, value } = e.target;
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </BrowserRouter> */}

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount number"
          name="amount"
          value={form.amount}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Amount details"
          name="desc"
          value={form.desc}
          onChange={handleInput}
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
