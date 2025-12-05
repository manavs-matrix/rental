const searchBox = document.getElementById("searchBox");
const categoryFilter = document.getElementById("categoryFilter");
const cards = document.querySelectorAll(".card");

function filterItems() {
    const searchText = searchBox.value.toLowerCase();
    const category = categoryFilter.value;

    cards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        const itemCategory = card.dataset.category;

        const matchesSearch = title.includes(searchText);
        const matchesCategory = category === "All" || itemCategory === category;

        card.style.display = matchesSearch && matchesCategory ? "block" : "none";
    });
}

searchBox.addEventListener("input", filterItems);
categoryFilter.addEventListener("change", filterItems);
