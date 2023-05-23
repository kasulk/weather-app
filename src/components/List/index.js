export default function List({ activities }) {
  return (
    // <>
    activities.map((activity) => {
      return <li key={activity.id}>{activity.name}</li>;
    })
    // </>
  );
}
