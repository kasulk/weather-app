import "./List.css";

export default function List({
  activities,
  isGoodWeather,
  filteredActivities,
  onDeleteActivity,
}) {
  return (
    <>
      <h2 className="main-content__list-title">
        {isGoodWeather
          ? "The weather is awesome! GO outside and: "
          : "Bad weather outside! Here's what you can do now: "}
      </h2>

      {filteredActivities.map((activity) => {
        return (
          <li className="main-content__listitem" key={activity.id}>
            {activity.name}
            <button
              className="main-content__listitem__button
            "
              onClick={() => onDeleteActivity(activity.id)}
            >
              {/* X */}
              <i class="fa-regular fa-trash-can main-content__listitem__icon"></i>
            </button>
          </li>
        );
      })}
    </>
  );
}
