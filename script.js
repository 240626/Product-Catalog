const products = [
    { id: 1, name: "🎧Wireless Headphones", category: "electronics", price: 99 },
    { id: 2, name: "⌚Smart Watch", category: "electronics", price: 199 },
    { id: 3, name: "👟Running Shoes", category: "fashion", price: 75 },
    { id: 4, name: "🧥Leather Jacket", category: "fashion", price: 250 },
    { id: 5, name: "🖱️Gaming Mouse", category: "electronics", price: 45 },
    { id: 6, name: "👓Sun Glasses", category: "fashion", price: 60 }
];

const catalog = document.getElementById('product-catalog');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const priceSort = document.getElementById('price-sort');

function displayProducts(filteredProducts) {
    catalog.innerHTML = "";
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <h3>${product.name}</h3>
            <span class="category">${product.category}</span>
            <div class="price">$${product.price}</div>
        `;
        catalog.appendChild(card);
    });
}

function filterAndSort() {
    let result = [...products];
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedSort = priceSort.value;

    if (searchText) {
        result = result.filter(p => p.name.toLowerCase().includes(searchText));
    }

    if (selectedCategory !== "all") {
        result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedSort === "low-high") {
        result.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "high-low") {
        result.sort((a, b) => b.price - a.price);
    }

    displayProducts(result);
}

searchInput.addEventListener('input', filterAndSort);
categoryFilter.addEventListener('change', filterAndSort);
priceSort.addEventListener('change', filterAndSort);

displayProducts(products);