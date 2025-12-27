const express = require("express");
const cors = require("cors");
const menuRoutes = require("./routes/menu.routes");

const app = express();




app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRoutes);

app.get("/", (req, res) => {
  res.send("Coffee Shop API running ☕");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
