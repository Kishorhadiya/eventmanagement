import React from "react";
import "./AddGalley.css";
import lock from "../../assets/locked.png";

function AddGalley() {
  return (
    <>
      <div className="AddGalley">
        <div className="AddGalley-img">
          <img src={lock} alt="" />
          <h3>Add Galley</h3>
        </div>
      </div>

      <form className="GalleyForm">
        <input type="file" />
        <input type="text" placeholder="Galley Name *   " />
        <button type="submit">Post</button>
      </form>
    </>
  );
}

export default AddGalley;
