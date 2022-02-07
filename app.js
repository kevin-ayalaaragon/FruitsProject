const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true,'name yo damn fruit!']
  },
  rating: {
      type: Number,
      min: 1,
      max: 10
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 5,
  review: "Its alright",
});

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best",
// });

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Too sour",
});

// const banana = new Fruit({
//   name: "Banana",
//   rating: 3,
//   review: "Weird texture",
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('Success!');
//     }
// } )

// fruit.save().then(() => console.log('yummm!'));

Fruit.find(function(err, fruits) {
    if(err){
        console.log(err);
    }
    else {

        fruits.forEach(fruit => {
            console.log(fruit.name);
        });

        // mongoose.connection.close();
    }
})

// Fruit.updateOne(
//     {_id: '61e079d8d392a707f38968bb'},
//     {name: 'Peach'},
//     function (err) {
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log('Success!');
//         }
//     }
// );

// Fruit.deleteOne(
//     {name:'Kiwi'},
//     function(err) {
//         if(err){
//             console.log(err);
//         }
//         else {
//             console.log('Successfully deleted!');
//         }
//     }
// );

const pineapple = new Fruit({
    name: 'Pineapple',
    rating: 9,
    review: 'Best fruit everrr'
})

const mango = new Fruit({
    name:'Mango',
    rating:8,
    review:'Its mango!'
})

// mango.save();

const personSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    first_name: "Amy",
    last_name: "Vader",
    age: 26,
    favoriteFruit: pineapple
});

// person.save();

// console.log(mongoose.modelNames());

// Person.deleteOne(
//     {_id:'61e079d8d392a707f38968bc'},
//     function(err) {
//         if(err){
//             console.log(err);
//         }
//         else {
//             console.log('Successfully deleted!');
//         }
//     }
// );

// Person.deleteMany(
//     {first_name:'Luke'},
//     function(err) {
//         if(err){
//             console.log(err);
//         }
//         else {
//             console.log('Successfully deleted!');
//         }
//     }
// );

// Fruit.deleteMany(
//     {name: 'Mango'},
//     function (err) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log('Deleted Many!');
//         }
//     }
// );

// Person.updateOne(
//     {first_name: 'Leia'},
//     {favoriteFruit: mango},
//     function (err) {
//         if (err) {
//             console.log(err);
//         }
//         else{
//             console.log('Successful Update!');
//         }
//     }
// );

// person.save().then(() => console.log("The force is string with this one!"));


