import "./Form.css";
import { useState } from "react";
import { uid } from "uid";

export default function Form({ onAddActivity }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.activity.value;
    // console.log("form:", form);
    const isForGoodWeather = event.target.isGood.checked;
    // console.log("isForGoodWeather:", isForGoodWeather)
    const data = {
      id: uid(),
      name,
      isForGoodWeather,
    };
    onAddActivity(data);
    event.target.reset();
    event.target.activity.focus();
    /* console.log(data); */
  }

  function Weather() {
    // console.log("Weather:", weather);
  }

  return (
    <>
      <form className="main-content__form" onSubmit={handleSubmit}>
        <h1 className="main-content__form__header">Add new activity:</h1>
        <label className="main-content__form__label" htmlFor="activity">
          Name:{" "}
        </label>
        <input
          className="main-content__form__input"
          type="text"
          name="activity"
          id="activity"
          /*           value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)} */
        />
        <label className="main-content__form__label" htmlFor="is-good">
          Good-weather activity{" "}
        </label>
        <input
          className="main-content__form__checkbox"
          type="checkbox"
          name="isGood"
          id="is-good"
        />
        <button className="main-content__form__button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
