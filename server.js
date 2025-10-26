// server.js — proxy to safely use your API key
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// your API key (keep it secret)
const NEWSAPI_KEY = "AIzaSyCR6F7PNqCTOYuT6bKzv8XUkfdaUsAE5MY";

// proxy route
app.get("/api/top-headlines", async (req, res) => {
  try {
    const params = new URLSearchParams(req.query);
    params.set("apiKey", NEWSAPI_KEY);
    if (!params.get("pageSize")) params.set("pageSize", "30");

    const url = `https://newsapi.org/v2/top-headlines?${params.toString()}`;
    const r = await fetch(url);
    const json = await r.json();
    res.json(json);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: String(err) });
  }
});

app.use(express.static(".")); // serve index.html from the same folder

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`✅ Proxy & site running on http://localhost:${PORT}`)
);
