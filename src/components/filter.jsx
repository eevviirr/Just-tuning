import React from "react";

function Filter({ value, filterItem, onClickFilter }) {
  return (
    <div className="filter">
      <ul>
        {filterItem.map((items, id) => {
          return (
            <li
              key={id}
              onClick={() => onClickFilter(id)}
              className={
                value == id ? "filter--items--active" : "filter--items"
              }
            >
              {items}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
