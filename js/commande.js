// Initialisation d'EmailJS avec ta clé publique
emailjs.init("EtOU6ZVqIlhv6rbxo");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Génère automatiquement la date actuelle
  const now = new Date();
  const formattedDate = now.toLocaleString(); // Format lisible (ex: 24/05/2025, 16:30:01)
  document.getElementById("form-date").value = formattedDate;

  // Envoie du formulaire via EmailJS
  emailjs.sendForm("service_k7boi3m", "template_mf2m5pc", form)
    .then(() => {
      alert("Message envoyé avec succès !");
      form.reset();
    }, (error) => {
      alert("Erreur : " + JSON.stringify(error));
    });
});
