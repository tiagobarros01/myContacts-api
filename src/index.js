import express from "express";
import { router as routes } from "./routes.js";

const app = express();

app.use((request, response, next) => {});
app.use(routes);

const PORT = 3000;

app.listen(PORT, () =>
    console.log(`🚀 Server is running at http://localhost:${PORT}`)
);
