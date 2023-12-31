import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from "./routes/user.router"
const app = express()

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes)

export default app;