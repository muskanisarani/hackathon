document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Organic Tomatoes", farm: "Green Valley Farms", price: 3 },
        { name: "Fresh Green Beans", farm: "Sunshine Farms", price: 2 }
    ];

    const productList = document.getElementById("product-list");
    const cartCount = document.getElementById("cart-count");
    let cartItems = 0;

    function addToCart() {
        cartItems++;
        cartCount.innerText = `Items in your cart: ${cartItems}`;
    }

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Farm:</strong> ${product.farm}</p>
            <p><strong>Price:</strong> ₹${product.price} per kg</p>
            <button onclick="addToCart()">Add to Cart</button>
            <button onclick="generateQR('${product.name}', '${product.farm}', ${product.price})">Scan QR Code</button>
            <div class="qr-code"></div>
        `;

        productList.appendChild(productDiv);
    });
});

function generateQR(product, farm, price) {
    const qrData = `Product: ${product}\nFarm: ${farm}\nPrice: ₹${price}`;
    const qrDiv = event.target.nextElementSibling;
    qrDiv.innerHTML = "";
    new QRCode(qrDiv, { text: qrData, width: 150, height: 150 });
}

function checkout() {
    alert("Proceeding to checkout...");
}
