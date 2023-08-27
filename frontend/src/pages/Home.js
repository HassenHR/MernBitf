import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";

function Home() {
  const [items, setItems] = useState([]);

  const getAllItems = async () => {
    axios
      .get("/api/items/all")
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div className="center">
      {items.map((item) => {
        return <Item item={item} key={item._id} />;
      })}
    </div>
  );
}

export default Home;
