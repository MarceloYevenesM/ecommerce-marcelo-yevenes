const products = [
  {
    id: "1",
    name: "Agenda",
    img: "https://bestbuyaccesorios.com/wp-content/uploads/2021/03/nuevos-3.jpg",
    description: "Agenda de 100 hojas con diseño y temática de astronauta",
    price: 15000,
    totalStock: "5",
    category: "agendas",
  },
  {
    id: "2",
    name: "Lápiz",
    img: "https://cdn.shopify.com/s/files/1/0267/6234/6595/products/WhatsAppImage2020-05-31at23.23.39_1800x.jpg?v=1590981902",
    description: "Lapices con temática de universo",
    price: 2000,
    totalStock: "10",
    category: "lapices",
  },
  {
    id: "3",
    name: "Lámpara",
    img: "https://falabella.scene7.com/is/image/Falabella/13788018_1?wid=800&hei=800&qlt=70",
    description: "Lámpara de luna con enchufe EU",
    price: 25000,
    totalStock: "8",
    category: "otros",
  },
  {
    id: "4",
    name: "Separador de páginas",
    img: "https://http2.mlstatic.com/D_NQ_NP_864576-MLC45476163674_042021-O.jpg",
    description:
      "Pack de separadores de página(25) con temánica de objetos del universo",
    price: 5000,
    totalStock: "15",
    category: "otros",
  },
];

const category = [
  {
    category: "inicio",
    url: "/",
  },
  {
    category: "agendas",
    url: "category/agendas",
  },
  {
    category: "lapices",
    url: "category/lapices",
  },
  {
    category: "plumas",
    url: "category/plumas",
  },
  {
    category: "otros",
    url: "category/otros",
  },
];

export const result = new Promise((resolve, reject) => {
  const url = "www.api/productos.cl";
  if (url === "www.api/productos.cl") {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  } else {
    reject("404 not found productos");
  }
});

export const resultCategory = new Promise((resolve, reject) => {
  const url = "www.api/categorias.cl";
  if (url === "www.api/categorias.cl") {
    setTimeout(() => {
      resolve(category);
    }, 2000);
  } else {
    reject("404 not found categorias");
  }
});




