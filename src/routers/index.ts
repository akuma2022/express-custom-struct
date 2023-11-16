import compression from "compression";

import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// init db

app.get("/test", (req, res) => {
  res.send("oke");
});

// init routes

export default app;
