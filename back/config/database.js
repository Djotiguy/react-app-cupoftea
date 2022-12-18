import mongoose from "mongoose";

//connexion à la base de données
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
  date: Date,
  images: [{
    src: String,
    alt: String
  }]
})

// let UserSchema = mongoose.Schema({
//  email: String,
//  password: String,
//  pseudo: String,
// })

let Tea = mongoose.model("Tea", TeaCupSchema)

// let User = mongoose.model("User", UserSchema)

export default database;