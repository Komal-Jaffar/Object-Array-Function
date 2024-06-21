//Task3-

//Company Product Catalog

//"Learning Objective: Implement data structures in Typescript to represent and manage product

//Information.

//Task: Create a program to represent a product catalog using an array and perform basic queries.

//1. Define an array named inventory to store product information.

//2. Create three

//separate objects, each representing a product, with properties like name,

//model, cost, and quantity.

//3. Add these product objects to the inventory array using an appropriate array method.

//4. Access and log the quantity property of a specific product (e.g., third product) in the Inventory array.

//5. Explore adding and accessing more elements within the inventory array to understand how to manage product data


let inventory = {

products: [] as product[]
};

type product = {

name: string,

model: string,

cost: number,

quantity: number
};

let product1 : product = {

name: "SmartPhone",

model: "Iphone",

cost: 140000,

quantity: 50
};

let product2 : product ={

name: "Laptop",

model: "Hp",

cost: 70000,

quantity: 40
};

let product3 : product ={

name: " Watch",

model: "Apple",

cost: 80000,

quantity: 50
};

inventory.products.push(product1, product2, product3);

console.log("Quantity of Third Product", inventory.products [2].quantity);

let product4 : product ={

name: "Earbuds",

model: "2023",

cost: 40000,

quantity: 60
};

let product5 : product = {

name: "Suzuki",

model: "2024",

cost: 700000,

quantity: 30
};

//inventory.products.push(product4, products);

let updateInventory = inventory.products.push(product4, product5);

console.log(updateInventory);

console.log("Name of the fifth product", inventory.products [4].name); 
console.log("cost of the first product", inventory.products[0].cost);