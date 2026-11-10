import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ideas } from "../data/mealGuides";
import MealCard from "../components/MealCard";

export default function Dashboard() {
  const { user } = useAuth();
  const [diet, setDiet] = useState("veg");
  const h = new Date().getHours();
  const greeting = h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";

  return (
    <main className="page">
      <section className="hero">
        <h1>{greeting}, {user.name.split(" ")[0]} 👋</h1>
        <p className="muted">Start with a meal idea, or check your BMI to get a plan.</p>
        <Link className="btn cta" to="/bmi">Check my BMI and pick a goal</Link>
      </section>

      <section>
        <div className="row">
          <h2>Meal ideas</h2>
          <div className="seg" role="group" aria-label="Diet type">
            <button className={diet === "veg" ? "on" : ""} onClick={() => setDiet("veg")}>🌱 Veg</button>
            <button className={diet === "nonveg" ? "on" : ""} onClick={() => setDiet("nonveg")}>🍗 Non-veg</button>
          </div>
        </div>
        <div className="grid">{ideas[diet].map((m) => <MealCard key={m.name} meal={m} />)}</div>
      </section>
    </main>
  );
}
