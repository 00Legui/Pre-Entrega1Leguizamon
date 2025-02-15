
const products = [
  {
    id: '1',
    title: "Mate Imperial",
    price: 15000,
    description: "Mate de calabaza premium con detalles en alpaca",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_892128-MLA53453705213_012023-F.webp",
    category: "mates",
    stock: 5
  },
  {
    id: '2',
    title: "Bombilla Alpaca",
    price: 8000,
    description: "Bombilla artesanal premium",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_657797-MLA53453672466_012023-F.webp",
    category: "bombillas",
    stock: 10
  },
  {
    id: '3',
    title: "Set Matero Completo",
    price: 25000,
    description: "Kit completo premium",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_859228-MLA54705376801_032023-F.webp",
    category: "sets",
    stock: 3
  },
  {
    id: '4',
    title: "Mate Camionero",
    price: 12000,
    description: "Mate de madera forrado en cuero",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_787221-MLA53453672464_012023-F.webp",
    category: "mates",
    stock: 8
  }
];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find(prod => prod.id === productId);
        resolve(product);
      }, 500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(prod => prod.category === categoryId);
        resolve(filteredProducts);
      }, 500);
    });
  };