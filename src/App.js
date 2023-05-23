import "./App.css";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(activity) {

    setActivities([...activities, activity])
    console.log(activities);

  }
  return (
    <div className="App">
      <Form onAddActivity={(activity) => handleAddActivity(activity)} />
    </div>
  );
}

export default App;
