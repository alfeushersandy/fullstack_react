import  express  from "express";
import cors from 'cors';
import userRoutes from "./routes/UserRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoutes);

app.listen(8000, () => console.log('listening on port 8000'));
