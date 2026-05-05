const express = require("express");

const app = express();


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const SUPABASE_URL = "https://grmvablffojjcnfohtql.supabase.co";
const SUPABASE_KEY = "sb_publishable_P_AjspSvHvdAF7U0rA4H6A_n7Bizdz1";

app.get("/products", async (req, res) => {
  console.log("👉 Request /products");

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    console.log("👉 Status:", response.status);

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
});

app.listen(4000, () => {
  console.log("🚀 Server running on http://localhost:4000");
});


setInterval(() => {}, 1000);