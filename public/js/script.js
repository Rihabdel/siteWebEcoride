
const tokenCookieName = "accesstoken";
const roleCookieName = "role";
const apiUrl = "http://localhost:8000/api/";
function setToken(token) {
    setCookie(tokenCookieName, token, 7); // Le cookie expire dans 7 jours
}
//récupérer le token
function getToken() {
    return getCookie(tokenCookieName); 
}
//pour savoir le role de l'utilisateur
function getRole(){
    return getCookie(roleCookieName);
}
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function isConnected() {
    if (getToken() == null || getToken() == undefined) {
        return false;
    }
    else{
        return true;
    }
}
//Gestion de la déconnexion
const btnDeconnexion = document.getElementById("btnDeconnexion");
btnDeconnexion.addEventListener("click", function() {
    eraseCookie(tokenCookieName);
    eraseCookie(roleCookieName);
    window.location.reload( );
    alert("Vous êtes déconnecté.");
});

//Afficher ou cacher les éléments en fonction du role
function showAndHideElementsForRoles(){
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll('[data-show]');

    allElementsToEdit.forEach(element =>{
        switch(element.dataset.show){
            case 'disconnected': 
                if(userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'connected': 
                if(!userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'admin': 
                if(!userConnected || role != "admin"){
                    element.classList.add("d-none");
                }
                break;
            case 'client': 
                if(!userConnected || role != "client"){
                    element.classList.add("d-none");
                }
                break;
        }
    })
}