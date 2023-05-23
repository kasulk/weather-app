import { useState } from "react";
import useFetch from "../../utils/useFetch";

export default function Form({ onAddActivity }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = event.target.activity.value;
    // console.log("form:", form);
    const isForGoodWeather = event.target.isGood.checked;
    // console.log("isForGoodWeather:", isForGoodWeather);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data:", data);
    const dataBla = {};
  }

  function Weather() {
    const weather = JSON.stringify(
      useFetch("https://example-apis.vercel.app/api/weather/")
    );

    // console.log("Weather:", weather);
  }
  Weather();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add new activity:</h1>
        <label htmlFor="activity">Name: </label>
        <input
          type="text"
          name="activity"
          id="activity"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <label htmlFor="is-good">Good-weather activity </label>
        <input type="checkbox" name="isGood" id="is-good" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
