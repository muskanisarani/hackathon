// Example of simple form validation
document.getElementById('farmer-form').addEventListener('submit', function(event) {
    let farmerName = document.getElementById('farmer-name').value;
    if (!farmerName) {
      alert("Please enter your name!");
      event.preventDefault();  // Prevent form submission if validation fails
    }
  });
  
  // Dynamic greeting message for consumers
  if (window.location.pathname === '/consumers.html') {
    document.querySelector('main').innerHTML += "<p>Happy shopping for organic products!</p>";
  }
  