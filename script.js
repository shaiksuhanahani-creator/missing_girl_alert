// Get form element
const form = document.querySelector("form");

// Check which page is loaded based on <h1> text
const pageTitle = document.querySelector("h1").innerText;

// Add submit listener
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get input values
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const location = document.getElementById("location").value;

  if (pageTitle.includes("Missing")) {
    // Send missing alert
    let message = `🚨 MISSING ALERT 🚨
Name: ${name}
Age: ${age}
Last Seen: ${location}

Please help find this person.`;

    let url = "https://wa.me/?text=" + encodeURIComponent(message);
    window.open(url, "_blank");

  } else if (pageTitle.includes("Found")) {
    // Send found alert
    let message = `✅ UPDATE: The missing person ${name} has been FOUND safely.
Please stop forwarding the previous alert.
Thank you for your support.`;

    let url = "https://wa.me/?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  }
});
