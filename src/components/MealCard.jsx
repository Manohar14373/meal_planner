import RecipeImage from "./RecipeImage";

export default function MealCard({ meal }) {
  return (
    <article className="meal">
      <RecipeImage name={meal.name} />
      <div className="meal-body">
        {meal.time && <div className="meal-time">{meal.time}</div>}
        <h3>{meal.name}</h3>
        <p className="muted">{meal.note}</p>
        <div className="chips">
          <span className="chip">{meal.kcal} kcal</span>
          <span className="chip">{meal.protein} g protein</span>
        </div>
      </div>
    </article>
  );
}
