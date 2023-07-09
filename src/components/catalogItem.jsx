import React from "react";

import "../UI/catalogItem.css";
import { Link } from "react-router-dom";

function CatalogItem({ title, date, type, imageUrl }) {
  return (
    <Link
      to={"/pagecard"}
      image={imageUrl}
      className="catalog--item__container"
    >
      <div className="catalog--item__photo">
        <img src={imageUrl} alt="" className="catalog--item__photo" />
      </div>
      <div className="catalog--item__information">
        <div className="date">{date}</div>
        <div className="service">{type}</div>
        <div className="catalog--item__descr">{title}</div>
      </div>
    </Link>
  );
}

export default CatalogItem;
