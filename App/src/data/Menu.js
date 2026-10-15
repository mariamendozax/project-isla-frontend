export const textos = {
  es: {
    titulo: "México Lindo y qué Rico",
    articulosLabel: "Artículos del menú",
    agregar: "Añadir al carrito",
    carrito: "Carrito:",
    articulo: "artículo",
    articulos: "artículos",
  },
  en: {
    titulo: "México Lindo y qué Rico",
    articulosLabel: "Menu items",
    agregar: "Add to cart",
    carrito: "Cart:",
    articulo: "item",
    articulos: "items",
  },
};

const queso = (precio) => ({
  id: "queso",
  tipo: "checkbox",
  nombre: { es: "Agregar queso", en: "Add cheese" },
  precio,
});

const carne = (precio) => ({
  id: "carne",
  tipo: "opciones",
  nombre: { es: "Agregar carne de tu elección", en: "Add meat of your choice" },
  precio,
  opciones: [
    { id: "birria", nombre: { es: "Birria", en: "Birria" } },
    { id: "barbacoa", nombre: { es: "Barbacoa", en: "Barbacoa" } },
    { id: "pollo", nombre: { es: "Pollo", en: "Chicken" } },
    { id: "carnitas", nombre: { es: "Carnitas", en: "Carnitas" } },
  ],
});

const huevos = (precio) => ({
  id: "huevos",
  tipo: "opciones",
  nombre: {
    es: "Agrega el ingrediente de tu elección",
    en: "Add ingredient of your choice",
  },
  precio,
  opciones: [
    { id: "fritos", nombre: { es: "Fritos", en: "Fried" } },
    { id: "revueltos", nombre: { es: "Revueltos", en: "Scrambled" } },
  ],
  ingredientes: [
    { id: "jamon", nombre: { es: "Jamón", en: "Ham" } },
    { id: "chorizo", nombre: { es: "Chorizo", en: "Chorizo" } },
    { id: "tocino", nombre: { es: "Tocino", en: "Bacon" } },
    { id: "mexicana", nombre: { es: "Mexicana", en: "Mexican" } },
  ],
});

export const categorias = [
  {
    id: "tacos",
    nombre: { es: "Tacos", en: "Tacos" },
    articulos: [
      {
        id: 1,
        nombre: "Taco de birria",
        descripcion: {
          es: "",
          en: "Mexican dish: marinated beef with chili peppers in spiced broth.",
        },
        precio: 40,
        extras: [queso(10)],
        imagen: tacoBirria,
      },
      {
        id: 2,
        nombre: "Taco de barbacoa de res",
        descripcion: {
          es: "",
          en: "Mexican dish: shredded meat in spiced broth.",
        },
        precio: 40,
        extras: [queso(10)],
        imagen: tacoBarbacoa,
      },
      {
        id: 3,
        nombre: "Taco de carnitas",
        descripcion: {
          es: "",
          en: "Mexican dish: small, shredded pieces of crisp roast pork.",
        },
        precio: 40,
        extras: [queso(10)],
        imagen: tacoCarnitas,
      },
      {
        id: 4,
        nombre: "Taco de pollo",
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
        nombre: "Torta de birria",
        descripcion: {
          es: "",
          en: "Mexican sandwich: marinated beef with chili peppers in spiced broth.",
        },
        precio: 100,
        extras: [queso(20)],
      },
      {
        id: 6,
        nombre: "Torta de barbacoa de res",
        descripcion: {
          es: "",
          en: "Mexican sandwich: shredded beef in spiced broth.",
        },
        precio: 100,
        extras: [queso(20)],
      },
      {
        id: 7,
        nombre: "Torta de carnitas",
        descripcion: {
          es: "",
          en: "Mexican sandwich: small, shredded pieces of crisp roast pork.",
        },
        precio: 100,
        extras: [queso(20)],
      },
      {
        id: 8,
        nombre: "Torta de pollo",
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
        nombre: "Quesabirria",
        descripcion: {
          es: "",
          en: "marinated beef with chili peppers in a cheesy flour tortilla, with a birria soup for dipping.",
        },
        precio: 60,
        imagen: quesabirria,
      },
      {
        id: 10,
        nombre: "Consomé Litro",
        descripcion: {
          es: "...",
          en: "Delicious beef and spiced soup with shredded beef. Great for hangover.",
        },
        precio: 180,
      },
      {
        id: 11,
        nombre: "Birriamen",
        descripcion: {
          es: "...",
          en: "Japanese ramen fusion with Mexican birria, and cheese. Delicious!",
        },
        precio: 120,
        imagen: birriamen,
      },
      {
        id: 12,
        nombre: "Flautas de barbacosa de res",
        descripcion: {
          es: "",
          en: "Crispy rolled tacos made with slow-cooked shredded barbacoa, topped with lettuce, cream and cheese.",
        },
        precio: 120,
        imagen: flautas,
      },
      {
        id: 13,
        nombre: "Guacamole con totopos",
        descripcion: {
          es: "",
          en: "Freshly made guacamole with tortilla chips.",
        },
        precio: 150,
        imagen: guacamole,
      },
      {
        id: 14,
        nombre: "Quesadillas",
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
        foto: tacosVegetarianos,
      },
      {
        id: 16,
        nombre: Burritos,
        descripcion: {
          es: "Burrito de tu elección de carne, con frijoles, queso y pico de gallo.",
          en: "Burrito with your choice of meat, beans, cheese and pico de gallo.",
        },
        precio: 120,
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
        precio: 120,
        opciones: [huevos(0)],
        ingredientes: [],
      },
    ],
  },
  {
    id: "por-kilo",
    nombre: { es: "Por kilo", en: "By kilo" },
    articulos: [
      {
        id: 20,
        nombre: "Birria",
        descripcion: { es: "...", en: "..." },
        precio: 350,
        unidad: { es: "kg", en: "kg" }, // 👈 solo donde aplique
        imagen: birriaKilo,
      },
    ],
  },
];
