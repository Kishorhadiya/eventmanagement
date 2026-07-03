import React from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";

const galleydata = [
  {
    id: 1,
    image: "/Cricket/cricket1.jpg",
    title: "Cricket Match",
  },
  {
    id: 2,
    image: "/Cricket/cricket4.jpg",
    title: "Cricket",
  },
  {
    id: 3,
    image: "/Cricket/cricket5.jpg",
    title: "Cricket League",
  },
  {
    id: 4,
    image: "/Office/office1.jpg",
    title: "Corporate Celebration",
  },

  {
    id: 5,
    image: "/Office/office2.jpg",
    title: "Annual Office Party",
  },

  {
    id: 6,
    image: "/Office/office3.jpg",
    title: "Team Gathering",
  },

  {
    id: 7,
    image: "/Calendar/calender4.jpg",
    title: "Holiday Festival",
  },

  {
    id: 8,
    image: "/Calendar/calender2.jpg",
    title: "Winter Carnival",
  },

  {
    id: 9,
    image: "/Calendar/calender3.jpg",
    title: "New Year Eve",
  },
];

function Gallery() {
  const navigate = useNavigate();

  return (
    <>
      <div className="my-galley">
        <h1>Our Event</h1>
      </div>

      <div className="galley-section">
        {galleydata.map((data) => (
          <div className="galley-card">
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
