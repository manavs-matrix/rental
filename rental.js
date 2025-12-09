// ITEMS DATA (DYNAMIC)
const items = [
    { name: "Computer Science Book", category: "Books", price: 80, image: "Assests/book.png" },
    { name: "Calculator", category: "Tech", price: 20, image: "Assests/calculator.png" },
    { name: "Lab Coat", category: "Clothes", price: 50, image: "Assests/lab_coat.png" },
    { name: "Laptop", category: "Electronics", price: 5000, image: "Assests/laptop.webp" },
    { name: "Jacket", category: "Clothes", price: 500, image: "Assests/jacket.png" },
    { name: "Watch", category: "Accessories", price: 300, image: "Assests/watch.webp" },
    { name: "Shoes", category: "Shoes", price: 400, image: "Assests/shoes.avif" },
    { name: "Keyboard", category: "Electronics", price: 200, image: "Assests/keyboard.webp" },
    { name: "Earbuds", category: "Tech", price: 100, image: "Assests/earbuds.webp" },
    { name: "Multimeter", category: "Tech", price: 150, image: "Assests/multimeter.jpg" }
];

const itemsContainer = document.getElementById("itemsContainer");
const searchBox = document.getElementById("searchBox");
const categoryFilter = document.getElementById("categoryFilter");
const noItems = document.getElementById("noItems");

// MODAL ELEMENTS
const rentModal = document.getElementById("rentModal");
const modalItemName = document.getElementById("modalItemName");
const modalPrice = document.getElementById("modalPrice");
const rentDays = document.getElementById("rentDays");
const totalPrice = document.getElementById("totalPrice");
const closeModal = document.getElementById("closeModal");

// GENERATE CARDS
function displayItems(list) {
    itemsContainer.innerHTML = "";

    if (list.length === 0) {
        noItems.style.display = "block";
        return;
    }

    noItems.style.display = "none";

    list.forEach(item => {
        itemsContainer.innerHTML += `
            <div class="card">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>₹${item.price}/day</p>
                <button onclick="openModal('${item.name}', ${item.price})">RENT NOW 🤝</button>
            </div>
        `;
    });
}

displayItems(items);

// SEARCH + CATEGORY FILTER
function filterItems() {
    const search = searchBox.value.toLowerCase();
    const category = categoryFilter.value;

    const filtered = items.filter(item =>
        item.name.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search) ||
        item.price.toString().includes(search)
    ).filter(item =>
        category === "All" || item.category === category
    );

    displayItems(filtered);
}

searchBox.addEventListener("input", filterItems);
categoryFilter.addEventListener("change", filterItems);

// OPEN MODAL
function openModal(name, price) {
    modalItemName.innerText = name;
    modalPrice.innerText = `Price per day: ₹${price}`;
    rentDays.value = 1;
    totalPrice.innerText = price;

    rentDays.oninput = () => {
        totalPrice.innerText = price * rentDays.value;
    };

    rentModal.style.display = "flex";
}

// CLOSE MODAL
closeModal.onclick = () => rentModal.style.display = "none";
window.onclick = (event) => {
    if (event.target === rentModal) rentModal.style.display = "none";
};
