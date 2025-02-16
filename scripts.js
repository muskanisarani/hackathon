document.getElementById('farmer-form').addEventListener('submit', function(event) {
    let farmerName = document.getElementById('farmer-name').value;
    if (!farmerName) {
      alert("Please enter your name!");
      event.preventDefault();
    }
  });
  
  if (window.location.pathname === '/consumers.html') {
    document.querySelector('main').innerHTML += "<p>Happy shopping for organic products!</p>";
  }
  
  document.getElementById("generateQRBtn").addEventListener("click", function (event) {
    event.preventDefault();
  
    const qrText = document.getElementById("qrText").value.trim();
    const qrCodeDiv = document.getElementById("qrCode");
  
    qrCodeDiv.innerHTML = "";
  
    if (qrText === "") {
      alert("Please enter text for the QR code!");
      return;
    }
  
    new QRCode(qrCodeDiv, {
      text: qrText,
      width: 200,
      height: 200
    });
  });
  
  
  
