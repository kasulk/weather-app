export default function List({
  activities,
  isGoodWeather,
  filteredActivities,
}) {
  return (
    // <>
    // activities
    filteredActivities
      //   .filter((activity) => activity.isForGoodWeather === isGoodWeather)
      .map((activity) => {
        return <li key={activity.id}>{activity.name}</li>;
      })
    // </>
  );
}
