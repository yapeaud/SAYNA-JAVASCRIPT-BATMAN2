// ACTIVATION DU MENU DE NAVIGATION
document.addEventListener('DOMContentLoaded', (event) => { // Attend que le DOM soit entièrement chargé
    const links = document.querySelectorAll('.navbar a'); // Sélectionne tous les liens dans la barre de navigation

    links.forEach(link => { // Pour chaque lien
        link.addEventListener('click', function() { // Ajoute un écouteur d'événement pour le clic
            links.forEach(item => item.classList.remove('active')); // Retire la classe 'active' de tous les liens
            this.classList.add('active'); // Ajoute la classe 'active' au lien cliqué
        });
    });
});

//
document.getElementById('nextQuestionBtn').addEventListener('click', function(event) { // Ajoute un écouteur d'événement pour le bouton 'nextQuestionBtn'
    const checkboxes = document.querySelectorAll('input[name="answer"]'); // Sélectionne toutes les cases à cocher avec le nom 'answer'
    let isChecked = false; // Initialise une variable pour vérifier si une case est cochée
    
    checkboxes.forEach((checkbox) => { // Pour chaque case à cocher
        if (checkbox.checked) { // Si la case est cochée
            isChecked = true; // Met la variable à true
        }
    });

    if (!isChecked) { // Si aucune case n'est cochée
        alert('Veuillez choisir au moins une réponse.'); // Affiche une alerte
        event.preventDefault(); // Empêche la redirection si aucune réponse n'est sélectionnée
    } else {
        window.location.href = './quiz2.html'; // Redirige vers la prochaine question si une réponse est sélectionnée
    }
});