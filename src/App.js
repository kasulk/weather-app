import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: dummyData,
  });
  // const [filteredActivities, setFilteredActivities] = useState([]);
  let filteredActivities = [];
  const isGoodWeather = true;
  // const [activities, setActivities] = useState([]);

  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
    console.log(activities);
  }

  filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  // );

  return (
    <div className="App">
      <ul>
        <List
          activities={activities}
          filteredActivities={filteredActivities}
          isGoodWeather={isGoodWeather}
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
