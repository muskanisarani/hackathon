document.getElementById('farmer-form').addEventListener('submit', function(event) {
  let farmerName = document.getElementById('farmer-name').value;
  if (!farmerName) {
    alert("Please enter your name!");
    event.preventDefault();
  }
});

if (window.location.pathname.includes('consumers.html')) {
  document.querySelector('main').innerHTML += "<p>Happy shopping for organic products!</p>";
}

document.getElementById("generateQRBtn").addEventListener("click", function (event) {
  event.preventDefault();

  const farmerName = document.getElementById("farmer-name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const farmAddress = document.getElementById("farm-address").value.trim();
  const productName = document.getElementById("product-name").value.trim();
  const price = document.getElementById("price").value.trim();
  const farmingPractices = document.getElementById("farming-practices").value.trim();
  const certification = document.getElementById("certification").value;

  if (!farmerName || !phone || !email || !farmAddress || !productName || !price || !farmingPractices) {
      alert("Please enter all required details before generating the QR Code!");
      return;
  }

  const qrData = `
      Farmer: ${farmerName}
      Phone: ${phone}
      Email: ${email}
      Location: ${farmAddress}
      Product: ${productName}
      Price: ₹${price}
      Certification: ${certification}
      Farming: ${farmingPractices}
  `;

  document.getElementById("qrCode").innerHTML = ""; // Clear old QR
  new QRCode(document.getElementById("qrCode"), {
      text: qrData,
      width: 200,
      height: 200
  });
});
