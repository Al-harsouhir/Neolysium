document.getElementById("mon-formulaire").addEventListener("submit", function (e) {
  e.preventDefault();

  const date = new Date().toLocaleString();

  emailjs.send("service_k7boi3m", "template_mf2m5pc", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    discord: document.getElementById("discord").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    time: date
  })
  .then(() => alert("Message envoyé avec succès !"))
  .catch((error) => console.error("Erreur EmailJS :", error));
});
