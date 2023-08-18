const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./utils/db");
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
console.log(process.env.PORT)
app.get("/users", (req,res)=>{
    res.json({message: `Users route from users app on: ${port}`})
})

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

