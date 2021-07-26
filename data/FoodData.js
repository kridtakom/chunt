const FoodData = [

  {
    id: 1,
    type: "food",
    name: "ซุปพักทอง",
    price: 40,
    calories: 525,
    foodImg: require("../assets/img/fuckusoup.png"),
    ingredients: [
      {
        name: "almond",
        img: require("../assets/img/almond.jpg"),
      },
      {
        name: "avocado",
        img: require("../assets/img/avocado.webp"),
      },
      {
        name: "onion",
        img: require("../assets/img/onion.jpg"),
      },
      {
        name: "pepper",
        img: require("../assets/img/pepper.jpg"),
      },
      {
        name: "pumpkin",
        img: require("../assets/img/pumpkin.jpg"),
      },
      {
        name: "salt",
        img: require("../assets/img/salt.jpg"),
      },
    ],
  },
  {
    id: 2,
    type: "food",
    name: "โทมาฮอว์ก สเต๊ก",
    price: 2850,
    calories: 2000,
    foodImg: require("../assets/img/tomahawk.jpg"),
    ingredients: [
      {
        name: "tomahawk beef",
        img: require("../assets/img/tomahawk-beef.jpg"),
      },
      {
        name: "rosemary",
        img: require("../assets/img/rosemary.jpg"),
      },
      {
        name: "thyme",
        img: require("../assets/img/thyme.jpg"),
      },
      {
        name: "butter",
        img: require("../assets/img/butter.jpg"),
      },
      {
        name: "pepper",
        img: require("../assets/img/pepper.jpg"),
      },
      {
        name: "salt",
        img: require("../assets/img/salt.jpg"),
      },
    ],
  },
  {
    id: 3,
    type: "noodle",
    name: "บะหมี่หมูแดง",
    price: 50,
    calories: 400,
    foodImg: require("../assets/img/redpork-noodle.jpg"),
    ingredients: [
      {
        name: "grilled red pork ",
        img: require("../assets/img/redpork.jpg"),
      },
      {
        name: "noodle",
        img: require("../assets/img/noodle.jpg"),
      },
      {
        name: "bokchoy",
        img: require("../assets/img/bokchoy.jpg"),
      },
      {
        name: "fired garlic",
        img: require("../assets/img/fried-garlic.jpg"),
      },
    ],
  },
  {
    id: 4,
    type: "fruit",
    name: "กล้วย",
    price: 7,
    calories: 120,
    foodImg: require("../assets/img/banana.jpg"),
    ingredients: [
      {
        name: "grilled red pork ",
        img: require("../assets/img/banana.jpg"),
      },
    ],
  },
  {
    id: 5,
    type: "beverage",
    name: "น้ำแร่",
    price: 40,
    calories: 0,
    foodImg: require("../assets/img/fiji.jpg"),
    ingredients: [
      {
        name: "grilled red pork ",
        img: require("../assets/img/mineral-water.png"),
      },
    ],
  },
];
export default FoodData;
