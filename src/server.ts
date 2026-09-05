import { configDotenv } from "dotenv";
import express from "express";
configDotenv();

const app = express();
const port = process.env.SERVER_PORT_NUMBER ?? 3000;

app.get("/", (_req, res) => {
    res.send("Hello World!");
});

app.get("/health", (_req, res) => {
    res.status(200).json({ status: "OK" });
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
