
// Inicializa conexion a la DB
firebase.initializeApp({
    apiKey: "AIzaSyDd2R1R8Uzaq3IOnaVclYesjAG1FwWkq9o",
    authDomain: "pruebajs-c1257.firebaseapp.com",
    projectId: "pruebajs-c1257"
});


function register() {
    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;

    console.log(`Email ${email}`);
    console.log(`Password ${password}`);

    firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
        document.getElementById('inputEmail').value = "";
        document.getElementById('inputPassword').value = "";
        alert('Usuario registrado');
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(`Error code ${errorCode}`)
        console.log(`Error message ${errorMessage}`)
    });
    console.log('Hizo un click');
}

function login() {
    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        document.getElementById('inputEmail').value = "";
        document.getElementById('inputPassword').value = "";
        alert('Usuario Conectado');
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(`Error code ${errorCode}`)
        console.log(`Error message ${errorMessage}`)
    });

}

function logout(){
     firebase.auth().signOut().then(function() {
            // Sign-out successful.
            alert("Usuario Desconectado");
          }).catch(function(error) {
            // An error happened.
            alert("Desconexion fallida!!!");
          });
}

