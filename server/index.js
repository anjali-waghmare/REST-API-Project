import express from "express";
import bodyParser from "body-parser"; 
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";
import cors from "cors";
import connectDB from "./controller/db.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(cors());

// 2. Setup your routes
app.use("/api", route);

app.get('/home', (req, res) => {
    res.send('Welcome to My Home page!');
});

// connected to DB

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port Node Js :${PORT}`);
    })
})

  export default app;