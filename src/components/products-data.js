// products.js

const products = [
  {
    id: 1,
    brand: "Stroopwafel Co.",
    img: { src: "/src/assets/product-photos/product1.jpg", alt: "Stroopwafel Classic (Box of 12)" },
    title: "Stroopwafel Classic (Box of 12)",
    dietTags: ["vegetarian"],
    categoryTags: ["Pastry"],
    price: "$6.50",
    weight: "300 g",
    desc: "Thin, buttery waffle cookies with a chewy caramel syrup center, it's the classic Dutch snack, perfect with coffee or tea."
  },
  {
    id: 2,
    brand: "Old Amsterdam",
    img: { src: "/src/assets/product-photos/product2.jpg", alt: "Old Amsterdam Style Gouda (Wheel, sliced)" },
    title: "Old Amsterdam Style Gouda (Wheel, sliced)",
    dietTags: ["vegetarian"],
    categoryTags: ["Cheese"],
    price: "$14.00",
    weight: "200 g",
    desc: "Rich, nutty aged Gouda-style cheese, pre-sliced for sandwiches and boards. Melts beautifully for toasts."
  },
  {
    id: 3,
    brand: "Unox",
    img: { src: "/src/assets/product-photos/product3.jpg", alt: "Rookworst Smoked Sausage (Traditional)" },
    title: "Rookworst Smoked Sausage (Traditional)",
    dietTags: [],
    categoryTags: ["Meats"],
    price: "$8.75",
    weight: "400 g",
    desc: "Classic Dutch smoked pork sausage with a mild spice, perfect warmed alongside stamppot or on a sandwich."
  },
  {
    id: 4,
    brand: "Harbour Sweets",
    img: { src: "/src/assets/product-photos/product4.webp", alt: "Dutch Licorice Mix (“Drop”) Tin" },
    title: "Dutch Licorice Mix (“Drop”)",
    dietTags: ["vegan", "vegetarian"],
    categoryTags: ["Snacks"],
    price: "$5.50",
    weight: "250 g",
    desc: "Assorted soft and salty Dutch licorice with intense, traditional flavors for licorice lovers."
  },
  {
    id: 5,
    brand: "Stroopwafel Co.",
    img: { src: "/src/assets/product-photos/product5.webp", alt: "Stroopwaffle Mini Pack (Individually Wrapped) — Organic" },
    title: "Stroopwaffle Mini Pack (Individually Wrapped) — Organic",
    dietTags: ["bio", "vegetarian"],
    categoryTags: ["Pastry"],
    price: "$7.95",
    weight: "180 g",
    desc: "Organic mini stroopwafels individually wrapped, great for lunches or gifting."
  },
  {
    id: 6,
    brand: "Commissioner",
    img: { src: "/src/assets/product-photos/product6.jpg", alt: "Commissioner Cold Brew Coffee (Dutch Blend)" },
    title: "Commissioner Cold Brew Coffee (Dutch Blend)",
    dietTags: ["vegan", "vegetarian"],
    categoryTags: ["Beverages"],
    price: "$3.25",
    weight: "355 ml",
    desc: "Smooth cold brew with subtle caramel notes, bottled for on-the-go refreshment."
  },
  {
    id: 7,
    brand: "Honig",
    img: { src: "/src/assets/product-photos/product7.png", alt: "Honey Mustard Sauce (Squeeze Bottle)" },
    title: "Honey Mustard Sauce (Squeeze Bottle)",
    dietTags: ["vegetarian"],
    categoryTags: ["Condiments"],
    price: "$4.25",
    weight: "250 ml",
    desc: "Sweet & tangy honey mustard inspired by classic Dutch flavors, perfect for sandwiches and dressings."
  },
  {
    id: 8,
    brand: "Old Amsterdam",
    img: { src: "/src/assets/product-photos/product8.png", alt: "Truffle Gouda Bites (Snack Pack)" },
    title: "Truffle Gouda Bites (Snack Pack)",
    dietTags: ["vegetarian"],
    categoryTags: ["Cheese"],
    price: "$6.99",
    weight: "150 g",
    desc: "Small, ready-to-eat Gouda cubes with a hint of truffle oil, perfect snack for platters."
  },
  {
    id: 9,
    brand: "Haring Holland",
    img: { src: "/src/assets/product-photos/product9.jpg", alt: "Pickled Herring in Dill (Jar)" },
    title: "Pickled Herring in Dill (Jar)",
    dietTags: [],
    categoryTags: ["Meats"],
    price: "$9.50",
    weight: "300 g",
    desc: "Tender bite-sized herring fillets pickled in dill and light vinegar, a Dutch delicacy for sandwiches and appetizers."
  },
  {
    id: 10,
    brand: "Speculaas Co.",
    img: { src: "/src/assets/product-photos/product10.jpg", alt: "Speculaas Cookies (Spiced Shortcrust)" },
    title: "Speculaas Cookies (Spiced Shortcrust)",
    dietTags: ["vegetarian"],
    categoryTags: ["Pastry"],
    price: "$4.95",
    weight: "200 g",
    desc: "Crisp spiced biscuits with cinnamon, nutmeg, and clove, it's traditional spiced Dutch biscuit."
  },
  {
    id: 11,
    brand: "Honig",
    img: { src: "/src/assets/product-photos/product11.png", alt: "Dutch Apple Cake Mix (Bake-at-home)" },
    title: "Dutch Apple Cake Mix (Bake-at-home)",
    dietTags: ["vegetarian"],
    categoryTags: ["Supplies"],
    price: "$7.00",
    weight: "500 g",
    desc: "Easy mix to make a classic Dutch apple cake — just add butter, eggs and apples."
  },
  {
    id: 12,
    brand: "Old Amsterdam",
    img: { src: "/src/assets/product-photos/product12.png", alt: "Gouda Cheese Spread (Herb)" },
    title: "Gouda Cheese Spread (Herb)",
    dietTags: ["vegetarian"],
    categoryTags: ["Cheese"],
    price: "$5.25",
    weight: "150 g",
    desc: "Creamy spreadable Gouda blended with chives and herbs. A perfect spread for crackers or sandwiches."
  },
  {
    id: 13,
    brand: "Zeeland Honey",
    img: { src: "/src/assets/product-photos/product13.jpeg", alt: "Raw Honey from Zeeland (Glass Jar) — Organic" },
    title: "Raw Honey from Zeeland (Glass Jar) — Organic",
    dietTags: ["bio", "vegetarian"],
    categoryTags: ["Condiments"],
    price: "$10.00",
    weight: "350 g",
    desc: "Single-origin raw honey with floral notes, harvested from coastal Zeeland apiaries."
  },
  {
    id: 14,
    brand: "Harbour Sweets",
    img: { src: "/src/assets/product-photos/product14.png", alt: "Dutch Licorice Salmiak Drops (Salted)" },
    title: "Dutch Licorice Salmiak Drops (Salted)",
    dietTags: ["vegan", "vegetarian"],
    categoryTags: ["Snacks"],
    price: "$4.75",
    weight: "200 g",
    desc: "Intense salted salmiak licorice — a quintessential Dutch flavor."
  },
  {
    id: 15,
    brand: "Old Amsterdam",
    img: { src: "/src/assets/product-photos/product15.avif", alt: "Baby Gouda (Mild) — Wheel" },
    title: "Baby Gouda (Mild) — Wheel",
    dietTags: ["vegetarian"],
    categoryTags: ["Cheese"],
    price: "$9.50",
    weight: "350 g",
    desc: "Mild, creamy baby Gouda ideal for kids and sandwiches, easy to slice and melt."
  },
  {
    id: 16,
    brand: "Polder Pantry",
    img: { src: "/src/assets/product-photos/product16.png", alt: "Dutch Pea Soup Mix (Erwtensoep)" },
    title: "Dutch Pea Soup Mix (Erwtensoep)",
    dietTags: ["vegetarian"],
    categoryTags: ["Supplies"],
    price: "$5.95",
    weight: "400 g",
    desc: "Traditional split pea soup mix with dried vegetables and herbs. Just add sausage or keep vegetarian for a hearty Dutch-style 'snert'."
  },
  {
    id: 17,
    brand: "Droste",
    img: { src: "/src/assets/product-photos/product17.webp", alt: "Dutch Cocoa Powder (Baking)" },
    title: "Dutch Cocoa Powder (Baking)",
    dietTags: ["vegan", "vegetarian"],
    categoryTags: ["Supplies"],
    price: "$6.00",
    weight: "250 g",
    desc: "Dutched (alkalized) cocoa powder for rich colour and mellow chocolate baking."
  },
  {
    id: 18,
    brand: "Delft Gifts",
    img: { src: "/src/assets/product-photos/product18.jpg", alt: "Delft Blue Ceramic Cheese Knife (Gift)" },
    title: "Delft Blue Ceramic Cheese Knife (Gift)",
    dietTags: [],
    categoryTags: ["Non-Foods"],
    price: "$18.00",
    weight: "120 g",
    desc: "Decorative Delft-blue ceramic-handled cheese knife, a charming gift or kitchen accent."
  },
  {
    id: 19,
    brand: "Harbour Sweets",
    img: { src: "/src/assets/product-photos/product19.webp", alt: "Pickled Vegetable Medley (Vegan)" },
    title: "Pickled Vegetable Medley (Vegan)",
    dietTags: ["vegan", "vegetarian"],
    categoryTags: ["Condiments"],
    price: "$6.25",
    weight: "350 g",
    desc: "Assorted pickled cucumbers, carrots, and onions in light brine — perfect as a side or sandwich topper."
  },
  {
    id: 20,
    brand: "Stroopwafel Co.",
    img: { src: "/src/assets/product-photos/product20.avif", alt: "Dutch Stroopwaffle Ice Cream Sandwich (Frozen)" },
    title: "Dutch Stroopwaffle Ice Cream Sandwich (Frozen)",
    dietTags: ["vegetarian"],
    categoryTags: ["Snacks"],
    price: "$4.50",
    weight: "120 g",
    desc: "Creamy vanilla ice cream between two caramel stroopwafels. A cold twist on a classic making it into an ice cream sandwich."
  }
];

export default products;
