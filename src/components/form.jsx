import React from "react";

import "../UI/form.css";

function Form() {
  return (
    <form action="POST" className="form">
      <input type="text" name="name" className="input" placeholder="Ваше имя" />
      <input
        type="text"
        name="name"
        className="input"
        placeholder="+7 912 345 67 89"
      />
      <button className="submit--button" type="submit">
        Отправить заявку
      </button>
    </form>
  );
}
export default Form;
