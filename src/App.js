import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: null });
  // const [activities, setActivities] = useState([]);


  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
    console.log(activities);
  }
  return (
    <div className="App">
      <ul>
        <List activities={activities} />
      </ul>
      <Form onAddActivity={(activity) => handleAddActivity(activity)} />
    </div>
  );
}

export default App;
