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
        mainContainer.innerHTML = '';

        // Loop through the products and append the generated HTML
        prods.forEach(product => {
            mainContainer.innerHTML += generateProductHTML(product);
        });
    }
}


function getByCategory(category: string): void {
    // Filter the products based on the category
    const filteredProducts = products.filter(product => product.category === category);
    
    // Render the filtered products
    renderProducts(filteredProducts);
}


function getByRating(minRating: number): void {
    // your code
}

export { renderProducts, getByCategory, getByRating };