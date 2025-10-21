import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/galerie", "Galerie", "/pages/galerie.html",[]),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html",["disconnected"], "js/auth/connexion.js"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html",["disconnected"], "js/auth/inscription.js"),
    new Route("/monCompte", "Mon Compte", "/pages/auth/monCompte.html",["client", "admin"]),
    new Route("/editPassword", "Modifier mot de passe", "/pages/auth/editPassword.html",["client", "admin"]),
    new Route("/allreserv", "Réservation", "/pages/reservation/allreserv.html",["client"]),
    new Route("/reserver", "Réserver", "/pages/reserver.html",["client"]),

    ];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "ecoRide"; 