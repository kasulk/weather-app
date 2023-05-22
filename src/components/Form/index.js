import useFetch from "../../utils/useFetch";

export default function Form() {
  function handleSubmit() {}

  function Weather() {
    const weather = JSON.stringify(
      useFetch("https://example-apis.vercel.app/api/weather/")
    );

    console.log("Weather:", weather);
  }
  Weather();

  return (
    <>
      <form>
        <h1>Add new activity:</h1>
        <label htmlFor="activity">Name: </label>
        <input type="text" name="activity" id="activity" />
        <label htmlFor="is-good">Good-weather activity </label>
        <input type="checkbox" name="is-good" id="is-good" />
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
