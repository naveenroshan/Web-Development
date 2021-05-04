const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingCat: {
      food: "apple",
      water: 1,
    }
  }
];

function useAnimals(animal){
return[
    animal.name,
    function(){
        console.log(animal.sound)
    }
]
}
//destructing the object and array
const [cat] = animals;
const {name, sound,feedingCat:{food,water}} =cat;
console.log(food);

//destructing a function
const [namefun, makeSound] = useAnimals(cat)
console.log(namefun);
console.log(makeSound());
