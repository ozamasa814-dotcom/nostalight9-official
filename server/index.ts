import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Vercelでは production の場合 dist/public 配下を配信
const staticPath =
  process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, "..", "dist", "public")
    : path.resolve(__dirname, "public");

app.use(express.static(staticPath));

// すべてのルートで index.html を返す（SPA対応）
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// Vercelサーバーレス用エクスポート
export default app;
