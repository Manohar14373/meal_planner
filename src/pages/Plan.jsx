import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { plans } from "../data/mealGuides";
import GoalTabs from "../components/GoalTabs";
import StatCard from "../components/StatCard";
import MealCard from "../components/MealCard";

export default function Plan() {
  const { goal } = useParams();
  const navigate = useNavigate();
  const plan = plans.find((p) => p.id === goal);
  if (!plan) return <Navigate to="/bmi" replace />;

  let kcal = plan.kcal;
  try { kcal = JSON.parse(localStorage.getItem("mp_profile"))?.calories?.[goal] ?? plan.kcal; } catch {}

  return (
    <main className="page">
      <Link to="/bmi" className="back">Back to BMI</Link>
      <h1>{plan.icon} {plan.title} plan</h1>
      <GoalTabs plans={plans} active={goal} onChange={(id) => navigate(`/plan/${id}`)} />
      <div className="stats">
        <StatCard value={kcal} label="kcal per day" />
        <StatCard value={`${plan.protein} g`} label="protein" />
        <StatCard value={plan.meals.length} label="meals a day" />
      </div>
      <p className="tip">💡 {plan.tip}</p>
      <div className="grid">{plan.meals.map((m) => <MealCard key={m.time} meal={m} />)}</div>
      <p className="muted small">Numbers are estimates for healthy adults and not medical advice. The meal portions below are sample sizes. Scale them to your calorie target.</p>
    </main>
  );
}
