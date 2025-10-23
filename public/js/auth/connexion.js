
const mailInput = document.getElementById("InputEmail");
const passwordInput = document.getElementById("InputPassword");
const btnConnexion = document.getElementById("btnConnexion");
const connexionForm = document.getElementById("connexionForm");

btnConnexion.addEventListener("click", checkCredentials);
//Function pour vérifier les credentials de l'utilisateur
function checkCredentials(){
//Récupération des données du formulaire
    let formData = new FormData(connexionForm);
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
    "username": formData.get("email"),
    "password": formData.get("password")
});

let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch(apiUrl + "login", requestOptions)
  .then(response =>{
        if(response.ok){
            return response.json();
        }
        else{
            mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
        }
    })
     .then(result => {
        //il faudra récupérer le token le vrai token depuis l'API
        const token = result.apiToken;
        setToken(token);
        setCookie(roleCookieName,result.roles[0],7);
        window.location.replace("/");
    })
    .catch(error => console.log('error', error));
}


