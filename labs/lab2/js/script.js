// Data from Musique Depot (musiquedepot.ca) and Long & McQuade (long-mcquade.com)
let inventory = [
    { name: "Roland FP-30X", type: "Digital Piano", price: 1199.99, quantity: 5, description: "The FP-30X is a portable piano that balances affordability with superior performance. It features Roland's SuperNATURAL Piano technology and the same expressive 88-note PHA-4 Standard keyboard as the premium FP-60X." },
    { name: "Casio AP470 Celviano", type: "Digital Piano", price: 2049.99, quantity: 3, description: "The Celviano AP-470 is a digital piano that offers an authentic playing experience with its advanced technology and acoustic features, including two grand piano sounds and 22 tones." },
    { name: "Groove S2024 Begginer Straocaster", type: "Electric Guitar", price: 179.99, quantity: 2, description: "Perfect for beginners and professionals." },
    { name: "Ibanez GRG121 DX", type: "Electric Guitar", price: 362.49, quantity: 4, description: "Ibanez builds guitars for all levels of players - from beginners to the most demanding masters of the instrument." },
    { name: "Roland TD-17KVX2S V-Drums Series 2", type: "Electronic Drum", price: 1899.99, quantity: 6, description: "The TD-17KVX2 lets your technique and expression shine through, backed with inspiring training tools to push you further. A 12-inch mesh-head snare and newly developed thin cymbals across the board deliver a high-end experience that's stunningly close to playing acoustic drums." },
    { name: "Alesis Turbo Mesh", type: "Electronic Drum", price: 449.00, quantity: 5, description: "The Alesis Turbo Mesh Kit is an electronic drum set that features mesh heads, MIDI over USB, and practice tools." },
    { name: "Yamaha 200 Series Student", type: "Flute", price: 899.99, quantity: 2, description: "Yamaha student and intermediate flutes are designed with features that help beginners master proper breath control, including a lip plate that guides airflow and keys with carefully considered dimensions and angles for optimal balance and playability." },
    { name: "Yamaha Standard Alto Saxophone - Gold Lacquer", type: "Saxophone", price: 1799.99, quantity: 10, description: "New feature: A redesigned neck receiver promotes a quick response and ease of play while also increasing the durability of the mechanism." }
];

function addItem(event) {
    event.preventDefault();
    const newItem = {
        name: document.getElementById("name").value.trim(),
        type: document.getElementById("type").value.trim(),
        price: parseFloat(document.getElementById("price").value),
        quantity: parseInt(document.getElementById("quantity").value),
        description: document.getElementById("description").value.trim()
    };

    inventory.push(newItem);
    listItems();
    calculateTotalValue();
}


function removeItem(itemName) {
    inventory = inventory.filter(i => i.name.toLowerCase() !== itemName.toLowerCase());
    listItems();
    calculateTotalValue();
}

function getItem(itemName) {
    inventory.forEach(i => {
        if (i.name.toLowerCase() === itemName.toLowerCase()) {
            return i;
        }
    });
}

function listItems() {
    const inventoryDiv = document.getElementById("inventory");
    inventoryDiv.innerHTML = "<h2>Current Inventory</h2>";

    inventory.forEach(item => {
        inventoryDiv.innerHTML += `
            <div class="item">
                <h3>${item.name}</h3>
                <p><strong>Type:</strong> ${item.type}</p>
                <p><strong>Price:</strong> $${item.price}</p>
                <p><strong>Quantity:</strong> ${item.quantity}</p>
                <p><strong>Description:</strong> ${item.description}</p>
                <button id="removeButton" onclick="removeItem('${item.name}')">Remove Item</button>
            </div>
        `;
    });
}

function searchItems(query) {
    const byNameResults = inventory.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    const byTypeResults = inventory.filter(item => item.type.toLowerCase().includes(query.toLowerCase()));

    console.log("Search by Name Results:", byNameResults);
    console.log("Search by Type Results:", byTypeResults);

    const searchResultDiv = document.getElementById("searchResult");
    searchResultDiv.innerHTML = "";
    if (byNameResults.length > 0) {
        byNameResults.forEach(item => {
            searchResultDiv.innerHTML += `
            <div class="item">
                <h3>${item.name}</h3>
                <p><strong>Type:</strong> ${item.type}</p>
                <p><strong>Price:</strong> $${item.price}</p>
                <p><strong>Quantity:</strong> ${item.quantity}</p>
                <p><strong>Description:</strong> ${item.description}</p>
                <button onclick="removeItem('${item.name}')">Remove Item</button>
            </div>
        `;
        });
    }
    if (byTypeResults.length > 0) {
        byTypeResults.forEach(item => {
            searchResultDiv.innerHTML += `
            <div class="item">
                <h3>${item.name}</h3>
                <p><strong>Type:</strong> ${item.type}</p>
                <p><strong>Price:</strong> $${item.price}</p>
                <p><strong>Quantity:</strong> ${item.quantity}</p>
                <p><strong>Description:</strong> ${item.description}</p>
                <button onclick="removeItem('${item.name}')">Remove Item</button>
            </div>
        `;
        });
    }
}

function calculateTotalValue() {
    let value = 0;
    for (const item of inventory) {
        value += item.price * item.quantity;
    }
    const totalValueDiv = document.getElementById("totalValue");
    totalValueDiv.textContent = `Total Inventory Value: $${value.toFixed(2)}`;
}

listItems();
calculateTotalValue();
