const BASE_URL = "http://localhost:3000/api/user";

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let body = {};
    body["email"] = email;
    body["password"] = password;
    loginRequest(BASE_URL+"/login", JSON.stringify(body));
}

function goToMainPage() {
    window.open("../main/main.html", "_self", "", true);
}

function loginRequest(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        },
        body: data
    })
        .then(response => {
            return response.json();
        })
        .then(response => {
            if (response) {
                goToMainPage();
            } else {
                alert("Credentiale invalide!");
            }
        });
        
}

function createAccount() {
    window.open("../createAccount/createAccount.html", "_self", "", true);
}