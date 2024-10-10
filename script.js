document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération des valeurs du formulaire
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation simple des champs requis
    if (nom === '' || email === '' || message === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Vérification du format de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return;
    }

    // Affichage du message de confirmation
    alert(`Merci, ${nom}! Votre message a été envoyé avec succès.`);
    
    // Réinitialisation du formulaire après envoi
    document.getElementById('contact-form').reset();
});
