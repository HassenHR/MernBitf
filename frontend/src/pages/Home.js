import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const initialForm = {
  amount: 0,
  desc: "",
};

function Home() {
  const [form, setForm] = useState(initialForm);

  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});

  const fetchAllTransactions = async () => {
    const response = await fetch("http://localhost:5000/transaction");
    const data = await response.json();
    setTransactions(data);
  };

  useEffect(() => {
    fetchAllTransactions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      setForm(initialForm);
      fetchAllTransactions();
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const removeTransaction = async (_id) => {
    if (window.confirm("Are you sure ?")) {
      const response = await fetch(`http://localhost:5000/transaction/${_id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.alert("Deleted successfully");
        fetchAllTransactions();
      }
    }
  };

  useEffect(() => {
    if (editTransaction !== {}) {
      setForm(editTransaction);
    }
  }, [editTransaction]);

  const updateTransaction = async () => {
    const response = await fetch(
      `http://localhost:5000/transaction/${editTransaction._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    return response;
  };

  return (
    <div>
      <Navbar />
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
        {!editTransaction ? (
          <button type="submit">Update</button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
      <br />
      <section>
        <div>
          <h1>Transactions</h1>
          {transactions
            ? transactions.map((transaction) => {
                return (
                  <div key={transaction._id}>
                    <h4>Name:{transaction.desc}</h4>
                    <h4>Price: {transaction.amount}</h4>
                    <h4>Date: {transaction.date}</h4>
                    <div>
                      <button onClick={() => setEditTransaction(transaction)}>
                        Edit
                      </button>
                      <button
                        onClick={() => removeTransaction(transaction._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </section>
    </div>
  );
}

export default Home;
