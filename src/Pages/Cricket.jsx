import React from "react";
import   "./Cricket.css";
// import img1 from "../assets/Cricket/cricket1.jpg";
// import img2 from "../assets/Cricket/cricket2.jpg";
// import img3 from "../assets/Cricket/cricket3.jpg";
// import img4 from "../assets/Cricket/cricket4.jpg";
// import img5 from "../assets/Cricket/cricket5.jpg";
// import img6 from "../assets/Cricket/cricket6.jpg";

function Cricket() {
  const CricketData = [
    {
      id: 1,
      image: img1,
      title: "IPL 2026",
      price: "₹2499",
    },
    {
      id: 2,
      image: img2,
      title: "Asia Cup",
      price: "₹1999",
    },
    {
      id: 3,
      image: img3,
      title: "World Cup",
      price: "₹2999",
    },
    {
      id: 4,
      image: img4,
      title: "Ranji Trophy",
      price: "₹1499",
    },

    {
      id: 5,
      image: img5,
      title: "Champions Trophy",
      price: "₹3499",
    },
    {
      id: 6,
      image: img6,
      title: " Premier League",
      price: "₹1799",
    },
  ];

   return(
    <div className="container">
      {CricketData.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <h3>{item.price}</h3>
        </div>
      ))}
    </div>
   );
}

export default Cricket;