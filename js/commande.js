document.addEventListener("DOMContentLoaded", function () {
    if (typeof emailjs !== "undefined") {
        emailjs.init("EtOU6ZVqIlhv6rbxo");

        const form = document.getElementById("mon-formulaire");
        const lastSentKey = "emailjs_last_sent";

        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                const now = Date.now();
                const lastSent = localStorage.getItem(lastSentKey);

                if (lastSent && now - lastSent < 5 * 60 * 1000) {
                    alert("Tu dois attendre 5 minutes avant de renvoyer un message.");
                    return;
                }

                const date = new Date().toLocaleString();

                emailjs.send("service_k7boi3m", "template_mf2m5pc", {
                    name: document.getElementById("name").value,
                    email: document.getElementById("email").value,
                    discord: document.getElementById("discord").value,
                    subject: document.getElementById("subject").value,
                    message: document.getElementById("message").value,
                    time: date,
                })
                .then(() => {
                    localStorage.setItem(lastSentKey, Date.now());
                    alert("Message envoyé avec succès !");
                })
                .catch((error) => console.error("Erreur EmailJS :", error));
            });
        } else {
            console.error("Formulaire introuvable !");
        }
    } else {
        console.error("EmailJS non chargé !");
    }
});
