const mongoose = require("mongoose");

const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model("Photo", PhotoSchema);

// Photo.create({
//     title:"Photo title 2",
//     description:"Photo description two"
// })

Photo.find({}, (err, data) => {
  console.log(data);
});

const id = "63b1e1d1feba765d2c2a5f35";

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: "Upddated title",
//     description: "Updated desc",
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

Photo.findByIdAndDelete(id, (err, data) => {
  console.log("Photo is deleted");
});
