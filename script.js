// Send missing report via WhatsApp
function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let location = document.getElementById("location").value;

  let message = `🚨 MISSING ALERT 🚨
Name: ${name}
Age: ${age}
Last Seen: ${location}

Please help find this person.`;

  let url = "https://wa.me/?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

function shareFoundWhatsApp() {
  let message = `✅ UPDATE: The missing person ${name} has been FOUND safely.
Please stop forwarding the previous alert.
Thank you for your support.`;

  let url = "https://wa.me/?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
