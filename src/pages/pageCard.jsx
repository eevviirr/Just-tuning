import React, { useState } from "react";

import "../UI/pageCard.css";

export default function PageCard({ image, value, items }) {
  console.log(items);
  return (
    <section className="pageCard">
      <div className="container">
        <h2 className="title__pageCard">Оклейка {">"} Mc Laren Оклейка </h2>
      </div>
      <img src={image} alt="" />
    </section>
  );
}
