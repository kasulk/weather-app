import "./App.css";
import GoodWeather from "./utils/background-animations/GoodWeather";
import BadWeather from "./utils/background-animations//BadWeather";
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import useFetch from "./utils/useFetch";


function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: dummyData,
  });

  const newWeather = {
    ...useFetch("https://example-apis.vercel.app/api/weather"),
  };

  console.log("APPsays: ", newWeather);

  let filteredActivities = [];
  const isGoodWeather = newWeather.isGoodWeather;

  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
    console.log(activities);
  }

  filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <div className="App">
      {isGoodWeather && <GoodWeather />}
      {!isGoodWeather && <BadWeather />}
      <header className="header">
        <span className="header__icon">
          {newWeather.condition || "loading..."}
        </span>
        <span className="header__temperature">
          {newWeather.temperature || "loading"}ºC
        </span>
      </header>
      <main className="main-content">
        <section className="main-content__form">
          <Form onAddActivity={(activity) => handleAddActivity(activity)} />
        </section>
        <section className="main-content__activities">
          <ul className="main-content__list-container">
            <List
              activities={activities}
              filteredActivities={filteredActivities}
              isGoodWeather={isGoodWeather}
              onDeleteActivity={handleDeleteActivity}
            />
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__text">Made with 🌶️ in Kreuzberg.</p>
        <p className="footer__text">
          C&D Web Development Industries Incorporated GmbH & Co. KG
          International Bros.
        </p>
        <p className="footer__text">©️ {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;

const dummyData = [
  {
    id: 0,
    name: "Kiss girlfried ❤️",
    isForGoodWeather: true,
  },
];
