import "./Form.css";
import { uid } from "uid";

export default function Form({ onAddActivity }) {

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.activity.value;

    const isForGoodWeather = event.target.isGood.checked;

    const data = {
      id: uid(),
      name,
      isForGoodWeather,
    };
    onAddActivity(data);
    event.target.reset();
    event.target.activity.focus();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__header">Add new activity:</h1>
        <div className="form__input">
          <label className="form__input--label" htmlFor="activity">
            Name your activity:
          </label>
          <input
            className="form__input--text"
            type="text"
            name="activity"
            id="activity"
            placeholder="Your activity!"
          />
        </div>
        <div className="form__input">
          <label className="form__input--label" htmlFor="is-good">
            Is it a good-weather activity?
          </label>
          <input
            className="form__input--checkbox"
            type="checkbox"
            name="isGood"
            id="is-good"
          />
        </div>
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
