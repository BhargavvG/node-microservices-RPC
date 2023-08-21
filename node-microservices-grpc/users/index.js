const express = require("express");
const cors = require("cors");
require("dotenv").config({path:`${__dirname}/.env`});
require("./utils/db");
const app = express();
// const UserRoutes = require("./router")
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
console.log(process.env.PORT)
app.get("/user", (req,res)=>{
  console.log('user')
    res.json({message: `Users route from users app on: ${port}`})
})
// app.use("/users", UserRoutes)
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

