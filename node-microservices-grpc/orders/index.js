const express = require("express");
const cors = require("cors");
require("dotenv").config({path: `${__dirname}/.env`});
require("./utils/db");
const app = express();
const OrderRoutes = require("./router")
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5002;
console.log(process.env.PORT)
app.get("/orders", (req,res)=>{
    res.json({message: `Orders route from orders app on: ${port}`})
})
app.use("/orders", OrderRoutes)
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

