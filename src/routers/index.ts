import compression from "compression";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import "module-alias/register";
import morgan from "morgan";

const app = express();
dotenv.config();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// init db

// init routes


export default app