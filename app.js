const express = require("express");
const app = express();



app.get("/courses", (req, res) => {
  console.log("Connected to React");
  let liste = ['pain', 'boursin'];
  res.json(liste);
 
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));