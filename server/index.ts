// server/index.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/** 本番は Vite のビルド成果物 dist/ を配信する */
const staticPath =
  process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, "..", "dist")
    : path.resolve(__dirname, "public");

app.use(express.static(staticPath));

/** ← これが「動く」証拠になるAPI（ http(s)://サイトURL/api/hello ） */
app.get("/api/hello", (_req, res) => {
  res.json({ ok: true, message: "Hello from Nostalight9 server 🎺" });
});

/** どのページに来ても index.html を返す（SPA用の決まり文句） */
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

/** ← Vercel向け：listen は書かず、アプリそのものを渡す */
export default app;
