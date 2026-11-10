// Calorie and protein figures are approximate, for planning only.
export const ideas = {
  veg: [
    { name: "Paneer bhurji wrap", kcal: 420, protein: 24, note: "Scrambled paneer, onion and tomato in a wholewheat roti." },
    { name: "Moong dal chilla", kcal: 320, protein: 20, note: "Savory lentil pancakes with mint chutney." },
    { name: "Chickpea quinoa bowl", kcal: 520, protein: 20, note: "Chickpeas, quinoa, cucumber, tomato and olive oil." },
    { name: "Tofu veggie stir-fry", kcal: 560, protein: 30, note: "Tofu and mixed vegetables over rice." },
    { name: "Yogurt berry oats", kcal: 380, protein: 28, note: "Greek yogurt, oats and berries. No cooking needed." },
  ],
  nonveg: [
    { name: "Chicken rice bowl", kcal: 560, protein: 45, note: "Grilled chicken, rice and steamed broccoli." },
    { name: "Veggie egg-white omelette", kcal: 280, protein: 24, note: "Egg whites with spinach, onion and tomato." },
    { name: "Baked salmon and potato", kcal: 600, protein: 40, note: "Salmon fillet, roasted potato and green beans." },
    { name: "Tuna tomato pasta", kcal: 540, protein: 40, note: "Canned tuna, pasta and a quick tomato sauce." },
    { name: "Chicken curry with brown rice", kcal: 520, protein: 42, note: "Light curry with vegetables. Reheats well." },
  ],
};

export const plans = [
  {
    id: "lose", icon: "🔥", title: "Weight loss", kcal: 1600, protein: 120,
    tip: "Aim for protein at every meal and fill half your plate with vegetables. Cook lunches in batches of three.",
    meals: [
      { time: "Breakfast", name: "Veggie egg scramble, 1 toast", kcal: 330, protein: 22, note: "3 eggs or 2 eggs plus whites, spinach, 1 slice wholewheat toast." },
      { time: "Lunch", name: "Chicken or tofu rice bowl", kcal: 480, protein: 38, note: "Palm-size protein, 1 cup cooked rice, large portion of vegetables." },
      { time: "Snack", name: "Cottage cheese and cucumber", kcal: 180, protein: 22, note: "Or a fruit and a handful of roasted chana." },
      { time: "Dinner", name: "Lentil dal, vegetables, small rice", kcal: 480, protein: 26, note: "Cook dal in a big pot for two dinners." },
    ],
  },
  {
    id: "maintain", icon: "⚖️", title: "Maintain", kcal: 2200, protein: 120,
    tip: "Keep portions steady and rotate foods across the week so your meals stay interesting.",
    meals: [
      { time: "Breakfast", name: "Peanut butter banana oats", kcal: 450, protein: 18, note: "Oats cooked in milk, a banana and a spoon of peanut butter." },
      { time: "Lunch", name: "Bean burrito bowl", kcal: 620, protein: 26, note: "Beans, rice, corn, tomato and avocado." },
      { time: "Snack", name: "Apple with peanut butter", kcal: 215, protein: 6, note: "A quick snack that travels well." },
      { time: "Dinner", name: "Baked salmon or paneer, potato, greens", kcal: 650, protein: 40, note: "Roast a tray of vegetables at the same time." },
    ],
  },
  {
    id: "gain", icon: "💪", title: "Muscle gain", kcal: 2800, protein: 150,
    tip: "Eat every 3 to 4 hours and add a protein shake or extra snack. Pair this with strength training 3 to 4 days a week.",
    meals: [
      { time: "Breakfast", name: "Eggs, toast and a banana milkshake", kcal: 700, protein: 38, note: "4 eggs, 2 toast slices, milk blended with a banana." },
      { time: "Lunch", name: "Chicken or tofu, large rice portion", kcal: 750, protein: 50, note: "200 g protein, 1.5 cups cooked rice, olive oil on vegetables." },
      { time: "Snack", name: "Whey and milk shake with nuts", kcal: 450, protein: 36, note: "30 g whey, 250 ml milk and a handful of almonds." },
      { time: "Dinner", name: "Salmon or dal, potato, vegetables", kcal: 700, protein: 40, note: "Add curd or a side of paneer to raise protein." },
      { time: "Late snack", name: "Greek yogurt with oats and berries", kcal: 380, protein: 28, note: "Easy to digest before bed." },
    ],
  },
];
