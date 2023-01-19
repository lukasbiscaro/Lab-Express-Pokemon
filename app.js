import express from "express";

import { allPokemon } from "./data.js";

const app = express();
app.use(express.json());

export { app };
