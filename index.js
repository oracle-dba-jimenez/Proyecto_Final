

// Inicializa conexion a la DB
firebase.initializeApp({
    apiKey: "AIzaSyDd2R1R8Uzaq3IOnaVclYesjAG1FwWkq9o",
            authDomain: "pruebajs-c1257.firebaseapp.com",
            databaseURL: "https://pruebajs-c1257.firebaseio.com",
            projectId: "pruebajs-c1257",
            storageBucket: "pruebajs-c1257.appspot.com",
            messagingSenderId: "402047589251",
            appId: "1:402047589251:web:065abff40e5e4d505074b6"
});

const db = firebase.firestore();
const storageRef = firebase.storage().ref();


function register() {
    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;

    console.log(`Email ${email}`);
    console.log(`Password ${password}`);

    firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
        document.getElementById('inputEmail').value = "";
        document.getElementById('inputPassword').value = "";
        save();
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

function save() {
    let emailUser = document.getElementById('inputEmail').value;
    let nameUser  = document.getElementById('inputName').value;
    let descUser  = document.getElementById('inputDesc').value;
    if (emailUser) {
        console.log(`Email:  ${emailUser}`);
        console.log(`Nombre:   ${nameUser}`);
        db.collection("usuarios").add({
            email:        emailUser,
            nombre:       nameUser,
            descripcion:  descUser,
            foto:         fotoUser
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                document.getElementById('inputEmail').value = null;
                document.getElementById('inputName').value = "";
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }
    else
        alert("Usuario no puede estar en blanco");
};

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

function subirfoto(){
    consolelog(storageRef);

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

