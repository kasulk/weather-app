import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import useFetch from "./utils/useFetch";
import { useState } from "react";


function App() {

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: dummyData,
  });


  const newWeather = { ...useFetch("https://example-apis.vercel.app/api/weather") }

  console.log("APPsays: ", newWeather)

  let filteredActivities = [];
  const isGoodWeather = newWeather.isGoodWeather;
  console.log(isGoodWeather)


  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
    console.log(activities);
  }

  filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  // );
  function handleDeleteActivity(id) {
    setActivities(activities.filter(activity => activity.id !== id));
  }

  return (
    <div className="App">
      <header>
        <span>{newWeather.condition}</span>
        <span>{newWeather.temperature}ºC</span>
      </header>
      <ul>
        <List
          activities={activities}
          filteredActivities={filteredActivities}
          isGoodWeather={isGoodWeather}
          onDeleteActivity={handleDeleteActivity}
        />
      </ul>
      <Form onAddActivity={(activity) => handleAddActivity(activity)} />
    </div>
  );
}

export default App;

const dummyData = [
  {
    id: 0,
    name: "Kiss girlfried",
    isForGoodWeather: true,
  },
];
