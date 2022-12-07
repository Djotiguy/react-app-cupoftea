const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// on indique à express où sont les fichiers statiques js, image et css
app.use(express.static("front"));

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

mongoose.connect('mongodb://localhost:27017/Cup');

mongoose.connection.on("error", () => {
  console.log("Erreur lors de la connexion à la base de données");
})

mongoose.connection.on("open", () => {
  console.log("Connexion à la base de données établie");
})


let TeaCupSchema = mongoose.Schema({
  title: String,
  description: String,
  category: String,
  prix: String,
  stock: Number,
  date: String,
  images: [{
    src: String,
    alt: String
  }]
})

let Tea = mongoose.model("Tea", TeaCupSchema);

// let OrderSchema = mongoose.Schema({
//   date: Date.now(),
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Tea"  },
//   client: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref:"User"
//   },
//   prixTotal: Number
// })
// let cup = new Tea();
// cup.title = 'hello';
// cup.description = 'false desc';
// cup.prix = '10,95€'
// cup.category = 'pseudo cat';
// cup.date = new Date();
// cup.save(console.log('entrer sauvegarder'));

// let UserSchema = mongoose.Schema({
//  email: String,
//  password: String,
//  pseudo: String,
// })




app.get("/courses", (req, res) => {
  console.log("Connected to React");
  // let liste = ['pain', 'boursin'];
  // let  products = Products.find({})
  // res.send(products);
 
});

app.post("/form", (req, res) =>{

  let newTea = new Tea({
    title: req.body.title,
    description: req.body.desc,
    category: req.body.category,
    prix: req.body.prix,
    stock: req.body.stock,
    date: req.body.date,

  })

  newTea.save( console.log('tea added'));
})
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));