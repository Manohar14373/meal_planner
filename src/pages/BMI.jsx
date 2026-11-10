import { useState } from "react";
import { Link } from "react-router-dom";
import { calcBmi, calcCalories } from "../lib/bmi";
import { plans } from "../data/mealGuides";

const MESSAGES = {
  info: "Your BMI is below the healthy range. A gentle calorie surplus with protein and strength training can help.",
  good: "Your BMI is in the healthy range. Maintaining, or building muscle at maintenance, are good options.",
  warn: "Your BMI is above the healthy range. A modest calorie deficit with protein and daily walking is a sensible start.",
  bad: "Your BMI is in the obese range. A steady deficit plus activity helps. Speak with a doctor or dietitian for personal guidance.",
};

export default function BMI() {
  const [f, setF] = useState({ sex: "m", age: 28, kg: 75, cm: 172, activity: 1.375, asian: false });
  const [res, setRes] = useState(null);
  const set = (e) => {
    const { name, value, type, checked } = e.target;
    setF({ ...f, [name]: type === "checkbox" ? checked : name === "sex" ? value : Number(value) });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const r = calcBmi(f);
    const calories = calcCalories(f);
    setRes({ ...r, calories });
    try { localStorage.setItem("mp_profile", JSON.stringify({ calories, bmi: r.bmi, label: r.label })); } catch {}
  };

  const pct = res ? Math.min(100, Math.max(0, ((res.bmi - 15) / 25) * 100)) : 0;

  return (
    <main className="page">
      <h1>BMI and goals</h1>
      <p className="muted">Enter your details to see your BMI category and choose a plan.</p>

      <form className="panel wide" onSubmit={onSubmit}>
        <div className="fields">
          <div><label htmlFor="sex">Gender</label>
            <select id="sex" name="sex" value={f.sex} onChange={set}><option value="m">Male</option><option value="f">Female</option></select></div>
          <div><label htmlFor="age">Age (18+)</label><input id="age" name="age" type="number" min="18" max="80" value={f.age} onChange={set} required /></div>
          <div><label htmlFor="kg">Weight (kg)</label><input id="kg" name="kg" type="number" min="30" max="250" step="0.1" value={f.kg} onChange={set} required /></div>
          <div><label htmlFor="cm">Height (cm)</label><input id="cm" name="cm" type="number" min="120" max="230" value={f.cm} onChange={set} required /></div>
          <div><label htmlFor="activity">Activity</label>
            <select id="activity" name="activity" value={f.activity} onChange={set}>
              <option value="1.2">Little exercise</option><option value="1.375">Light, 1 to 3 days</option>
              <option value="1.55">Moderate, 3 to 5 days</option><option value="1.725">Hard, 6 to 7 days</option>
            </select></div>
        </div>
        <label className="check"><input type="checkbox" name="asian" checked={f.asian} onChange={set} /> Use Asian BMI cut-offs (overweight from 23, obese from 25)</label>
        <button className="btn" type="submit">Calculate BMI</button>
      </form>

      {res && (
        <>
          <section className="panel wide result" aria-live="polite">
            <div className="bmi-num">{res.bmi}</div>
            <span className={`badge ${res.tone}`}>{res.label}</span>
            <div className="scale"><i style={{ left: `${pct}%` }} /></div>
            <div className="scale-labels"><span>15</span><span>18.5</span><span>25</span><span>30</span><span>40</span></div>
            <p>{MESSAGES[res.tone]}</p>
            <p className="muted">A healthy weight for your height is about {res.low} to {res.high} kg. BMI is a screening guide and does not account for muscle, so it is not a diagnosis.</p>
          </section>

          <h2>Choose your goal</h2>
          <div className="goal-grid">
            {plans.map((p) => {
              const blocked = res.tone === "info" && p.id === "lose";
              const card = (
                <>
                  {res.goal === p.id && <span className="rec">Recommended</span>}
                  <div className="goal-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p className="muted">{blocked ? "Not advised at your BMI." : `About ${res.calories[p.id]} kcal per day`}</p>
                </>
              );
              return blocked
                ? <div key={p.id} className="goal disabled" aria-disabled="true">{card}</div>
                : <Link key={p.id} to={`/plan/${p.id}`} className="goal">{card}</Link>;
            })}
          </div>
        </>
      )}
    </main>
  );
}
