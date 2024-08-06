/* CETTE FONCTION GÈRE LE COMPORTEMENT DES LIENS DE NAVIGATION DANS UNE BARRE DE NAVIGATION */

document.addEventListener('DOMContentLoaded', (event) => { // Attend que le DOM soit entièrement chargé
    const links = document.querySelectorAll('.navbar a'); // Sélectionne tous les liens dans la barre de navigation

    links.forEach(link => { // Pour chaque lien
        link.addEventListener('click', function() { // Ajoute un écouteur d'événement pour le clic
            links.forEach(item => item.classList.remove('active')); // Retire la classe 'active' de tous les liens
            this.classList.add('active'); // Ajoute la classe 'active' au lien cliqué
        });
    });
});

/* CETTE FONCTION PERMET LE SCROLL DE LA PAGE */

// Attend que le DOM soit complètement chargé avant d'exécuter le code à l'intérieur
document.addEventListener("DOMContentLoaded", function() {

    // Sélectionne l'élément avec la classe "scroll-down"
    const scrollDownImage = document.querySelector(".scroll-down");

    // Sélectionne l'élément avec la classe "scroll-up"
    const scrollUpImage = document.querySelector(".scroll-up");

    // Ajoute un écouteur d'événement de clic à l'élément "scrollDownImage"
    scrollDownImage.addEventListener("click", function() {
        // Lorsque l'élément est cliqué, défile la page vers le bas jusqu'à la fin du document
        window.scrollTo({
            top: document.body.scrollHeight, // Position verticale maximale (bas de la page)
            behavior: "smooth" // Défilement en douceur
        });
    });

    // Ajoute un écouteur d'événement de clic à l'élément "scrollUpImage"
    scrollUpImage.addEventListener("click", function() {
        // Lorsque l'élément est cliqué, remonte la page jusqu'en haut
        window.scrollTo({
            top: 0, // Position verticale minimale (haut de la page)
            behavior: "smooth" // Défilement en douceur
        });
    });
});

/* GERER L'INTERACTION AVEC LE BOUTON "Next Question" EN VÉRIFIANT QUE L'UTILISATEUR A SÉLECTIONNÉ AU MOINS UNE RÉPONSE AVANT DE PASSER À LA QUESTION SUIVANTE. */

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
// document.addEventListener("DOMContentLoaded", function() { // Exécute le script après le chargement du contenu de la page
//     const nextQuestionBtn = document.getElementById("nextQuestionBtn"); // Récupère le bouton 'nextQuestionBtn'
//     const answerCheckboxes = document.querySelectorAll("input[type='checkbox']"); // Sélectionne toutes les cases à cocher
//     let currentScore = localStorage.getItem('currentScore') ? parseInt(localStorage.getItem('currentScore')) : 0; // Récupère le score actuel depuis le localStorage ou initialise à 0
//     const totalQuestions = 15; // Nombre total de questions (pas utilisé dans ce script)

//     nextQuestionBtn.addEventListener("click", function(event) { // Ajoute un écouteur d'événement pour le bouton 'nextQuestionBtn'
//         const checkboxes = document.querySelectorAll('input[name="answer"]'); // Sélectionne toutes les cases à cocher avec le nom 'answer'
//         let isChecked = false; // Initialise une variable pour vérifier si une case est cochée

//         checkboxes.forEach((checkbox) => { // Pour chaque case à cocher
//             if (checkbox.checked) { // Si la case est cochée
//                 isChecked = true; // Met la variable à true
//             }
//         });

//         if (!isChecked) { // Si aucune case n'est cochée
//             alert('Veuillez choisir au moins une réponse.'); // Affiche une alerte
//             event.preventDefault(); // Empêche la redirection si aucune réponse n'est sélectionnée
//         } else { // Si une case est cochée
//             let answered = false; // Initialise une variable pour vérifier si une case est cochée

//             answerCheckboxes.forEach((checkbox) => { // Pour chaque case à cocher
//                 if (checkbox.checked) { // Si la case est cochée
//                     answered = true; // Met la variable à true
//                     if (checkbox.nextElementSibling.textContent.trim() === "Le Sphinx" || // Si le texte suivant la case est "Le Sphinx"
//                         checkbox.nextElementSibling.textContent.trim() === "Psychiatre" || // Si le texte suivant la case est "Psychiatre"
//                         checkbox.nextElementSibling.textContent.trim() === "Une pièce" || // Si le texte suivant la case est "Une pièce"
//                         checkbox.nextElementSibling.textContent.trim() === "Andy Warhol" || // Si le texte suivant la case est "Andy Warhol"
//                         checkbox.nextElementSibling.textContent.trim() === "Turquie" || // Si le texte suivant la case est "Turquie"
//                         checkbox.nextElementSibling.textContent.trim() === "Ra’s al Ghul" || // Si le texte suivant la case est "Ra’s al Ghul"
//                         checkbox.nextElementSibling.textContent.trim() === "Huntress" ||// Si le texte suivant la case est "Huntress"
//                         checkbox.nextElementSibling.textContent.trim() === "" ||
//                         checkbox.nextElementSibling.textContent.trim() === "" ||
//                         checkbox.nextElementSibling.textContent.trim() === "" ||
//                         checkbox.nextElementSibling.textContent.trim() === "" ||
//                         checkbox.nextElementSibling.textContent.trim() === "" ||
//                         checkbox.nextElementSibling.textContent.trim() === "" ||
//                         checkbox.nextElementSibling.textContent.trim() === "" ||
//                         checkbox.nextElementSibling.textContent.trim() === "") { 
//                         currentScore++; // Incrémente le score actuel
//                         localStorage.setItem('currentScore', currentScore); // Enregistre le score actuel dans le localStorage
//                     }
//                 }
//             });

//             if (answered) { // Si une réponse est cochée
//                 window.location.href = nextQuestionBtn.getAttribute("href"); // Redirige vers la prochaine question
//             }
//         }
//     });

//     const viewResultBtn = document.querySelector(".btn-quiz:last-of-type"); // Sélectionne le dernier bouton de type 'btn-quiz'
//     if (viewResultBtn) { // Si le bouton existe
//         viewResultBtn.addEventListener("click", function(event) { // Ajoute un écouteur d'événement pour le bouton 'viewResultBtn'
//             event.preventDefault(); // Empêche la redirection par défaut
//             const score = currentScore; // Récupère le score actuel
//             localStorage.removeItem('currentScore'); // Supprime le score actuel du localStorage

//             // Redirige vers la page de résultats appropriée en fonction du score actuel
//             if (score >= 0 && score <= 5) {
//                 window.location.href = 'result_5.html'; // Redirige vers 'result_5.html' si le score est entre 0 et 5
//             } else if (score > 5 && score <= 10) {
//                 window.location.href = 'result_10.html'; // Redirige vers 'result_10.html' si le score est entre 6 et 10
//             } else if (score > 10 && score <= 15) {
//                 window.location.href = 'result_15.html'; // Redirige vers 'result_15.html' si le score est entre 11 et 15
//             }
//         });
//     }
// });


