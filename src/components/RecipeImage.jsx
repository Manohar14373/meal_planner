import { useState } from "react";

const EMOJI = [["egg","🍳"],["omelette","🍳"],["paneer","🧀"],["chicken","🍗"],["salmon","🐟"],["tuna","🐟"],["tofu","🥘"],["dal","🍲"],["lentil","🍲"],["wrap","🌯"],["burrito","🌯"],["chilla","🥞"],["oats","🥣"],["yogurt","🥣"],["pasta","🍝"],["shake","🥤"],["apple","🍎"],["cottage","🥒"],["quinoa","🥗"],["curry","🍛"],["rice","🍚"]];

export const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Shows /images/<slug>.jpg when the photo exists. Otherwise shows a colored emoji tile.
export default function RecipeImage({ name }) {
  const [failed, setFailed] = useState(false);
  const lower = name.toLowerCase();
  const emoji = (EMOJI.find(([k]) => lower.includes(k)) || [0, "🍽️"])[1];
  const hue = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;

  if (failed)
    return (
      <div className="thumb" role="img" aria-label={name}
        style={{ background: `linear-gradient(135deg, hsl(${hue} 65% 78%), hsl(${(hue + 40) % 360} 60% 62%))` }}>
        <span>{emoji}</span>
      </div>
    );
  return (
    <div className="thumb">
      <img src={`/images/${slugify(name)}.jpg`} alt={name} loading="lazy" onError={() => setFailed(true)} />
    </div>
  );
}
