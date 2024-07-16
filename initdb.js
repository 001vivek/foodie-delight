const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Salmans restaruants",
    slug: "Salmans-restaruants",
    image: "/images/Salmans-restaruants.jpg",
    summary: "Veg and non veg",
    instructions: `
        1. Prepare the patty:
           Mix 200g of ground beef with salt and pepper. Form into a patty.
        2. Cook the patty:
           Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.
        3. Assemble the burger:
           Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.
        4. Serve:
           Complete the assembly with the top bun and serve hot.
      `,
    creator: "Viman nagar",
    creator_email: "test1@gmail.com",
  },
  {
    title: "Emmers bakery",
    slug: "Emmers-bakery",
    image: "/images/Emmers-bakery.jpeg",
    summary: "High cost with good luxury",
    instructions: `
       1. Prepare the patty:
          Mix 200g of ground beef with salt and pepper. Form into a patty.
       2. Cook the patty:
          Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.
       3. Assemble the burger:
          Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.
       4. Serve:
          Complete the assembly with the top bun and serve hot.
     `,
    creator: "Koregaon park",
    creator_email: "test2@gmail.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
