export default function List({
  activities,
  isGoodWeather,
  filteredActivities,
  onDeleteActivity
}) {
  return (

    <>
      <h2>{isGoodWeather ? "The weather is awesome! GO outside and: " : "Bad weather outside! Here's what you can do now: "}</h2>

      {filteredActivities
        .map((activity) => {
          return <li key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>X</button>
          </li>;
        })}
    </>
  );
}
