const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.get("/product", (req,res)=>{
    res.json({message: `Products route from products app on: ${port}`})
})

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

