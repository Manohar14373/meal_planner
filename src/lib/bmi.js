// BMI is a screening tool for adults, not a diagnosis.
export function calcBmi({ kg, cm, asian }) {
  const m = cm / 100;
  const bmi = kg / (m * m);
  const cut = asian ? [18.5, 23, 25] : [18.5, 25, 30];
  let label, tone, goal;
  if (bmi < cut[0]) { label = "Underweight"; tone = "info"; goal = "gain"; }
  else if (bmi < cut[1]) { label = "Normal weight"; tone = "good"; goal = "maintain"; }
  else if (bmi < cut[2]) { label = "Overweight"; tone = "warn"; goal = "lose"; }
  else {
    tone = "bad"; goal = "lose";
    label = asian ? "Obese" : bmi >= 40 ? "Obese (class III)" : bmi >= 35 ? "Obese (class II)" : "Obese (class I)";
  }
  const hi = (asian ? 22.9 : 24.9) * m * m;
  return { bmi: Math.round(bmi * 10) / 10, label, tone, goal, low: Math.round(18.5 * m * m), high: Math.round(hi) };
}

export function calcCalories({ kg, cm, age, sex, activity }) {
  const bmr = 10 * kg + 6.25 * cm - 5 * age + (sex === "m" ? 5 : -161);
  const tdee = bmr * activity;
  const floor = sex === "m" ? 1500 : 1200;
  const r = (x) => Math.round(x / 10) * 10;
  return { maintain: r(tdee), lose: r(Math.max(tdee * 0.8, floor)), gain: r(tdee * 1.12) };
}
