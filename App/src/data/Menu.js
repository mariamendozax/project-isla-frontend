import barbacoa from "../../images/barbacoa.png";
import carnitas from "../../images/carnitas.png";
import chilaquiles from "../../images/chilaquiles.png";
import desayuno from "../../images/desayuno.png";
import guac from "../../images/guac.png";
import quesabirria from "../../images/quesabirria.png";
import veggie from "../../images/veggie.png";
import flautas from "../../images/flautas.png";
import birriamen from "../../images/birriamen.png";
import TacoBirria from "../../images/TacoBirria.png";

export const textos = {
  es: {
    titulo: "México Lindo Isla",
    articulosLabel: "Artículos del menú",
    agregar: "Añadir al carrito",
    carrito: "Carrito:",
    articulo: "artículo",
    articulos: "artículos",
    cart: "Tu carrito está vacío 🌮",
    siguiente: "Siguiente",
    quitar: "Quitar",
    total: "Total",
    volver: "Menu",
    pedir: "Pedir",
  },
  en: {
    titulo: "México Lindo Isla",
    articulosLabel: "Menu items",
    agregar: "Add to cart",
    carrito: "Cart:",
    articulo: "item",
    articulos: "items",
    cart: "Your cart is empty 🌮",
    siguiente: "Next",
    quitar: "Remove",
    total: "Total",
    volver: "Menu",
    pedir: "Checkout",
  },
};

const queso = (precio) => ({
  id: "queso",
  tipo: "checkbox",
  nombre: { es: "Agregar queso", en: "Add cheese" },
  precio,
});

const carne = (precio, obligatorio = false) => ({
  id: "carne",
  tipo: "opciones",
  obligatorio,
  nombre: { es: "Agregar carne de tu elección", en: "Add meat of your choice" },
  precio,
  opciones: [
    { id: "birria", nombre: { es: "Birria", en: "Birria" } },
    { id: "barbacoa", nombre: { es: "Barbacoa", en: "Barbacoa" } },
    { id: "pollo", nombre: { es: "Pollo", en: "Chicken" } },
    { id: "carnitas", nombre: { es: "Carnitas", en: "Carnitas" } },
  ],
});

const ingredientesComunes = (precio, excluir = [], obligatorio = false) => ({
  id: "ingredientesComunes",
  tipo: "opciones",
  obligatorio,
  nombre: {
    es: "Elige el ingrediente de tu elección",
    en: "Choose the ingredient you want",
  },
  precio,
  opciones: [
    { id: "jamon", nombre: { es: "Jamón", en: "Ham" } },
    { id: "chorizo", nombre: { es: "Chorizo", en: "Chorizo" } },
    { id: "tocino", nombre: { es: "Tocino", en: "Bacon" } },
    { id: "mexicana", nombre: { es: "Mexicana", en: "Mexican" } },
  ].filter((op) => !excluir.includes(op.id)),
});

const huevos = (precio, obligatorio = false) => ({
  id: "huevos",
  tipo: "opciones",
  obligatorio,
  nombre: {
    es: "Elige el tipo de huevo que deseas",
    en: "Choose the type of egg you want",
  },
  precio,
  opciones: [
    { id: "fritos", nombre: { es: "Fritos", en: "Fried" } },
    { id: "revueltos", nombre: { es: "Revueltos", en: "Scrambled" } },
  ],
});

const sabores = (precio, obligatorio = false) => ({
  id: "sabores",
  tipo: "opciones",
  obligatorio,
  nombre: {
    es: "Elige una opción",
    en: "Choose an option",
  },
  precio,
  opciones: [
    { id: "Platano", nombre: { es: "Platano", en: "Banana" } },
    { id: "Fresa", nombre: { es: "Fresa", en: "Strawberry" } },
    { id: "Chocolate", nombre: { es: "Chocolate", en: "Chocolate" } },
    {
      id: "Chocobanana",
      nombre: { es: "Chocobanana", en: "Chocolate with Banana" },
    },
  ],
});

const yogurt = (precio) => ({
  id: "yogurt",
  tipo: "opciones",
  nombre: {
    es: "Añade yogurt",
    en: "Add yogurt",
  },
  precio,
  opciones: [{ id: "yogurt", nombre: { es: "Yogurt", en: "Yogurt" } }],
});

const granola = (precio) => ({
  id: "granola",
  tipo: "opciones",
  nombre: {
    es: "Añade granola",
    en: "Add granola",
  },
  precio,
  opciones: [{ id: "granola", nombre: { es: "Granola", en: "Granola" } }],
});

export const categorias = [
  {
    id: "tacos",
    nombre: { es: "Tacos", en: "Tacos" },
    articulos: [
      {
        id: 1,
        nombre: { es: "Taco de birria", en: "Birria Taco (beef)" },
        descripcion: {
          es: "",
          en: "Mexican dish: marinated beef with chili peppers in spiced broth.",
        },
        precio: 40,
        extras: [queso(10)],
        foto: TacoBirria,
      },
      {
        id: 2,
        nombre: { es: "Taco de barbacoa de res", en: "Barbacoa Taco (beef)" },
        descripcion: {
          es: "",
          en: "Mexican dish: shredded meat in spiced broth.",
        },
        precio: 40,
        extras: [queso(10)],
        foto: barbacoa,
      },
      {
        id: 3,
        nombre: { es: "Taco de carnitas", en: "Carnitas Taco (Pork)" },
        descripcion: {
          es: "",
          en: "Mexican dish: small, shredded pieces of crisp roast pork.",
        },
        precio: 40,
        extras: [queso(10)],
        foto: carnitas,
      },
      {
        id: 4,
        nombre: { es: "Taco de pollo", en: "Chicken Taco" },
        descripcion: {
          es: "Pollo a la plancha",
          en: "Grilled chicken",
        },
        precio: 40,
        extras: [queso(10)],
      },
    ],
  },
  {
    id: "tortas",
    nombre: { es: "Tortas", en: "Sandwiches" },
    articulos: [
      {
        id: 5,
        nombre: { es: "Torta de birria", en: "Birria Sandwich" },
        descripcion: {
          es: "",
          en: "Mexican sandwich: marinated beef with chili peppers in spiced broth.",
        },
        precio: 100,
        extras: [queso(20)],
      },
      {
        id: 6,
        nombre: {
          es: "Torta de barbacoa de res",
          en: "Barbacoa Sandwich (beef)",
        },
        descripcion: {
          es: "",
          en: "Mexican sandwich: shredded beef in spiced broth.",
        },
        precio: 100,
        extras: [queso(20)],
      },
      {
        id: 7,
        nombre: {
          es: "Torta de carnitas",
          en: "Carnitas Sandwich (Pork)",
        },
        descripcion: {
          es: "",
          en: "Mexican sandwich: small, shredded pieces of crisp roast pork.",
        },
        precio: 100,
        extras: [queso(20)],
      },
      {
        id: 8,
        nombre: {
          es: "Torta de pollo",
          en: "Chicken Sandwich",
        },
        descripcion: {
          es: "Pollo a la plancha",
          en: "Grilled chicken",
        },
        precio: 100,
        extras: [queso(20)],
      },
    ],
  },
  {
    id: "especialidades",
    nombre: { es: "Especialidades", en: "Specialties" },
    articulos: [
      {
        id: 9,
        nombre: { es: "Quesabirria", en: "Quesabirria" },
        descripcion: {
          es: "",
          en: "Marinated beef with chili peppers in a cheesy tortilla, with a birria soup for dipping.",
        },
        precio: 60,
        foto: quesabirria,
      },
      {
        id: 10,
        nombre: { es: "Consomé Litro", en: "Beef Soup" },
        descripcion: {
          es: "",
          en: "Delicious beef and spiced soup with shredded beef. Great for hangover.",
        },
        precio: 180,
      },
      {
        id: 11,
        nombre: { es: "Birriamen", en: "Birriamen" },
        descripcion: {
          es: "",
          en: "Japanese ramen fusion with Mexican birria, and cheese. Delicious!",
        },
        precio: 120,
        foto: birriamen,
      },
      {
        id: 12,
        nombre: {
          es: "Flautas de barbacosa de res",
          en: "Barbacoa Flautas(beef)",
        },
        descripcion: {
          es: "",
          en: "Crispy rolled tacos made with slow-cooked shredded barbacoa, topped with lettuce, cream and cheese.",
        },
        precio: 120,
        foto: flautas,
      },
      {
        id: 13,
        nombre: { es: "Guacamole", en: "Guacamole" },
        descripcion: {
          es: "Guacamole con totopos",
          en: "Freshly made guacamole with tortilla chips.",
        },
        precio: 150,
        foto: guac,
      },
      {
        id: 14,
        nombre: { es: "Quesadillas", en: "Quesadillas" },
        descripcion: {
          es: "Orden de tres quesadillas con tortilla de harina.",
          en: "Three quesadillas with flour tortilla.",
        },
        precio: 120,
        extras: [carne(60)],
      },
      {
        id: 15,
        nombre: { es: "Tacos vegetarianos", en: "Vegetarian Tacos" },
        descripcion: {
          es: "Orden de 3 tacos de frijol, queso, con pico de gallo y tiras de aguacate.",
          en: "Three vegetarian tacos with beans, cheese, pico de gallo and avocado slices.",
        },
        precio: 120,
        foto: veggie,
      },
      {
        id: 16,
        nombre: { es: "Burritos", en: "Burritos" },
        descripcion: {
          es: "Burrito con elección de carne, con frijoles, queso y pico de gallo.",
          en: "Burrito with your choice of meat, beans, cheese and pico de gallo.",
        },
        precio: 120,
        extras: [carne(0, true)],
      },
    ],
  },
  {
    id: "desayunos",
    nombre: { es: "Desayunos", en: "Breakfast" },
    articulos: [
      {
        id: 17,
        nombre: { es: "Huevos al gusto", en: "Eggs any style" },
        descripcion: {
          es: "Fritos o revueltos, con un ingrediente a su elección: jamón, chorizo, tocino o a la mexicana  Acompañados de frijoles refritos y un topping de chilaquiles.",
          en: "Fried or scrambled eggs. With an ingredient of your choice: ham, bacon, chorizo or mexican style. Served with beans and a chilaquiles topping.",
        },
        precio: 140,
        extras: [
          huevos(0, true),
          { ...ingredientesComunes(0), obligatorio: true },
        ],
      },
      {
        id: 18,
        nombre: { es: "Huevos Rancheros", en: "Rancheros Eggs" },
        descripcion: {
          es: "Huevos rancheros Sobre una cama de tortillas bañados en salsa. Acompañados de frijoles refritos y un topping de chilaquiles.",
          en: "Rancheros eggs On a bed of tortillas and bathed in sauce. Served with beans and chilaquiles topping.",
        },
        precio: 140,
        extras: [huevos(0, true)],
      },
      {
        id: 19,
        nombre: { es: "Chilaquiles", en: "Chilaquiles" },
        descripcion: {
          es: "Chilaquiles con salsa verde, o roja, crema y queso.",
          en: "Chilaquiles with green or red sauce, cream and cheese.",
        },
        precio: 140,
        extras: [huevos(0, true)],
        foto: chilaquiles,
      },
      {
        id: 20,
        nombre: { es: "Chilaquiles con carne", en: "Chilaquiles with meat" },
        descripcion: {
          es: "Chilaquiles con salsa verde, o roja, crema y queso.",
          en: "Chilaquiles with green or red sauce, cream and cheese.",
        },
        precio: 180,
        extras: [carne(0, true)],
      },
      {
        id: 21,
        nombre: { es: "Molletes", en: "Molletes" },
        descripcion: {
          es: "",
          en: "2 slices of cheesy bread, beans and pico de gallo.",
        },
        precio: 120,
        extras: [ingredientesComunes(40, ["mexicana"])],
      },
      {
        id: 22,
        nombre: { es: "Omelette con queso", en: "Omelette with cheese" },
        descripcion: {
          es: "Acompañado de frijoles refritos y un topping de chilaquiles.",
          en: "Served with beans and a chilaquiles topping.",
        },
        precio: 140,
        extras: [ingredientesComunes(20)],
      },
      {
        id: 23,
        nombre: { es: "Pancakes 3 Piezas", en: "Pancakes 3 Pieces" },
        descripcion: {
          es: "",
          en: "",
        },
        precio: 120,
      },
      {
        id: 24,
        nombre: {
          es: "Pancakes con huevo y tocino",
          en: "Pancakes with egg and bacon",
        },
        descripcion: {
          es: "",
          en: "",
        },
        extras: [huevos(0, true)],
        precio: 180,
        foto: desayuno,
      },
      {
        id: 25,
        nombre: { es: "Burrito de huevo", en: "Egg Burrito" },
        descripcion: {
          es: "Burrito de huevo revuelto con frijoles, queso, pico de gallo y un ingrediente a elegir: jamón, tocino o a la mexicana..",
          en: "Egg burrito with beans, cheese, pico de gallo and one ingredient of your choice: ham, bacon or Mexican style.",
        },
        extras: [ingredientesComunes(0, [], true)],
        precio: 90,
      },
      {
        id: 26,
        nombre: { es: "Plato de fruta", en: "Fruit Plate" },
        descripcion: {
          es: "Una selección de frutas frescas de temporada.",
          en: "A selection of fresh seasonal fruits.",
        },
        extras: [yogurt(15), granola(15)],
        precio: 85,
      },
    ],
  },
  {
    id: "bebidas",
    nombre: { es: "Bebidas", en: "Drinks" },
    articulos: [
      {
        id: 27,
        nombre: { es: "Agua del día", en: "Flavored fruit Water" },
        descripcion: { es: "1L", en: "1L" },
        precio: 75,
      },
      {
        id: 28,
        nombre: { es: "Licuado de frutas", en: "Fruit Milkshake" },
        descripcion: { es: "1L", en: "1L" },
        extras: [sabores(0, true), yogurt(15), granola(15)],
        precio: 100,
      },
    ],
  },
  {
    id: "extras",
    nombre: { es: "Extras", en: "Extras" },
    articulos: [
      {
        id: 29,
        nombre: { es: "Frijoles Refritos", en: "Refried Beans" },
        descripcion: {
          es: "Orden con totopos",
          en: "Order with crusty tortillas",
        },
        precio: 40,
      },
      {
        id: 30,
        nombre: { es: "Chicharron", en: "Chicharron" },
        descripcion: { es: "Orden", en: "Order" },
        precio: 50,
      },
      {
        id: 31,
        nombre: { es: "Pico de Gallo", en: "Pico de Gallo" },
        descripcion: {
          es: "Orden con totopos",
          en: "Order with crusty tortillas",
        },
        precio: 40,
      },
    ],
  },
  {
    id: "por-kilo",
    nombre: { es: "Por kilo", en: "2.2 pounds/1 kg" },
    articulos: [
      {
        id: 20,
        nombre: { es: "1 kg Birria", en: "Birria" },
        descripcion: {
          es: "Incluyen tortillas, cilantro, cebolla y salsas.",
          en: "All the orders included tortillas, onion with cilantro and spicy souce.",
        },
        precio: 620,
        unidad: { es: "kg", en: "kg" },
      },
      {
        id: 21,
        nombre: { es: "1/2 kg Birria", en: "1/2 kg Birria" },
        descripcion: {
          es: "Incluyen tortillas, cilantro, cebolla y salsas.",
          en: "All the orders included tortillas, onion with cilantro and spicy souce.",
        },
        precio: 340,
        unidad: { es: "kg", en: "kg" },
      },
      {
        id: 22,
        nombre: { es: "1 kg Barbacoa de res", en: "Barbacoa(beef)" },
        descripcion: {
          es: "Incluyen tortillas, cilantro, cebolla y salsas.",
          en: "All the orders included tortillas, onion with cilantro and spicy souce.",
        },
        precio: 620,
        unidad: { es: "kg", en: "kg" },
      },
      {
        id: 23,
        nombre: { es: "1/2 kg Barbacoa de res", en: "1/2 kg Barbacoa(beef)" },
        descripcion: {
          es: "Incluyen tortillas, cilantro, cebolla y salsas.",
          en: "All the orders included tortillas, onion with cilantro and spicy souce.",
        },
        precio: 340,
        unidad: { es: "kg", en: "kg" },
      },
      {
        id: 24,
        nombre: { es: "1 kg Carnitas", en: "Carnitas(Pork)" },
        descripcion: {
          es: "Incluyen tortillas, cilantro, cebolla y salsas.",
          en: "All the orders included tortillas, onion with cilantro and spicy souce.",
        },
        precio: 460,
        unidad: { es: "kg", en: "kg" },
      },
      {
        id: 25,
        nombre: { es: "1/2 kg Carnitas", en: "1/2 kg Carnitas(Pork)" },
        descripcion: {
          es: "Incluyen tortillas, cilantro, cebolla, salsas y chicharron.",
          en: "All the orders included tortillas, onion with cilantro, spicy souce and chicharron.",
        },
        precio: 250,
        unidad: { es: "kg", en: "kg" },
      },
    ],
  },
];
