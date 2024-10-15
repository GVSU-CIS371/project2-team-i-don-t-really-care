import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    const mainContainer = document.getElementById("main-container");

    if (mainContainer) {
        // Clear the container before adding products
        mainContainer.innerHTML = "";

        // Loop through the products and append the generated HTML
        prods.forEach((product) => {
            mainContainer.innerHTML += generateProductHTML(product);
        });
    }
}

function getByCategory(category: string): void {
    // Filter the products based on the category
    const filteredProducts = products.filter(
        (product) => product.category === category
    );

    // Render the filtered products
    renderProducts(filteredProducts);
}

function getByRating(minRating: number): void {
    // Filter products by highest rated
    const filteredProducts = products.filter((product) => product.rating > 4.5);

    // Render the filtered products
    renderProducts(filteredProducts);
}

//Function that displays all the electronics
function displayElectronics(event: MouseEvent): void {
    const electronics = getByCategory("Electronics");
}
//Event listener for electronics
const clickElectronics = document.getElementById("electronics");
if (clickElectronics) {
    clickElectronics.addEventListener("click", displayElectronics);
}

//Function that displays all the clothing
function displayClothing(event: MouseEvent): void {
    const clothing = getByCategory("Clothing");
}
//Event listener for clothing
const clothingLink = document.getElementById("clothing");
if (clothingLink) {
    clothingLink.addEventListener("click", displayClothing);
}

//Funtion that displays all the groceries
function displayGroceries(event: MouseEvent): void {
    const groceries = getByCategory("Groceries");
}
//Event listener for groceries
const groceriesLink = document.getElementById("groceries");
if (groceriesLink) {
    groceriesLink.addEventListener("click", displayGroceries);
}

//Funtion that displays all the best sellers
function displayBestSeller(event: MouseEvent): void {
    const best = getByRating(4.5);
}
//Event listener for best sellers
const bestSellerLink = document.getElementById("bestSeller");
if (bestSellerLink) {
    bestSellerLink.addEventListener("click", displayBestSeller);
}

export { renderProducts, getByCategory, getByRating };
