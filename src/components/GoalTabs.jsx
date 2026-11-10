export default function GoalTabs({ plans, active, onChange }) {
  return (
    <div className="tabs" role="tablist" aria-label="Meal plan goal">
      {plans.map((p) => (
        <button
          key={p.id}
          role="tab"
          aria-selected={active === p.id}
          className={active === p.id ? "tab active" : "tab"}
          onClick={() => onChange(p.id)}
        >
          {p.icon} {p.title}
        </button>
      ))}
    </div>
  );
}
