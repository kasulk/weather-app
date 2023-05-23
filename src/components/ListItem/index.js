export default function ListItem(
  onDeleteActivity,
  filteredActivities
  //   children
) {
  return (
    <>
      {filteredActivities.map((activity) => {
        return (
          <li key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>X</button>
          </li>
        );
      })}
    </>
  );
}
