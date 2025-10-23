import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/app/views/home.html",[]),
    new Route("/connexion", "Connexion", "/app/views/auth/connexion.html",[]),
    new Route("/inscription", "Inscription", "/app/views/auth/inscription.html",[]),
    new Route("/monCompte", "Mon Compte", "/app/views/auth/monCompte.html",[]),
    new Route("/editPassword", "Modifier mot de passe", "/app/views/auth/editPassword.html",[]),
    new Route("/allreserv", "Réservation", "/app/views/reservation/allreserv.html",[]),
    new Route("/reserver", "Réserver", "/app/views/reservation/reserver.html",[]),

    ];

//Le titre s'affiche comme ceci : Route.titre - websiteName
export const websiteName = "ecoRide"; 