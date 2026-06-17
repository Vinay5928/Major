import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/prices")
      .then(res => {
        setCoins(res.data);
      });

  }, []);

  return (

    <div>

      <h1>Crypto Dashboard</h1>

      {coins.map(coin => (

        <div key={coin.id}>

          <h3>{coin.name}</h3>

          <p>${coin.current_price}</p>

        </div>

      ))}

    </div>

  );

}

export default Dashboard;