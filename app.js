require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Hii, I am Live");
});

// set the router
app.use("/api/products/", product_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`${PORT}, I am live `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
