const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();
app.use(express.json());
connectDB();
const foodRouter = require("./routes/food");
const authRouter = require("./routes/auth");

app.use("/api/foods", foodRouter);
app.use("/api/auth", authRouter);
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) {
    console.log("server is not running");
  }
  console.log(`server is running on port ${port}...`);
});
