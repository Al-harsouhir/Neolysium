window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("mon-formulaire");

  if (!form) {
    console.error("Formulaire introuvable !");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const date = new Date().toLocaleString();

    emailjs.send("ton_service_id", "ton_template_id", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      discord: document.getElementById("discord").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
      time: date,
    })
    .then(() => alert("Message envoyé avec succès !"))
    .catch((error) => console.error("Erreur EmailJS :", error));
  });
});
