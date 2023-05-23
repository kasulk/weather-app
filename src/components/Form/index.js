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
      isForGoodWeather
    }
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
      <form onSubmit={handleSubmit}>
        <h1>Add new activity:</h1>
        <label htmlFor="activity">Name: </label>
        <input
          type="text"
          name="activity"
          id="activity"
        /*           value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)} */
        />
        <label htmlFor="is-good">Good-weather activity </label>
        <input type="checkbox" name="isGood" id="is-good" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
