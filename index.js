const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send(`Hey it's working`);
});
app.listen(PORT, () => console.log(`server up and running at  ${PORT}`));

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

//IMPORT ROUTES
const authRoute = require('./routes/auth/auth');
const authDashboard = require('./routes/auth/authDashbord');

//ACCESSING THE ENVIRONMENT VARIABLES
dotenv.config();

//CONNECTION TO DATABASE
mongoose.connect('mongodb+srv://ajargh:Ajargh123@projectcluster.tx9gp0v.mongodb.net/ajargh?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});

//MIDDLEWARE -> DISALBING CORS AND USED FOR JSON OUTPUT
app.use(express.json(), cors());

//ROUTE MIDDLEWARE
app.use("/api/users", authRoute);
app.use("/api/dashboard", authDashboard);