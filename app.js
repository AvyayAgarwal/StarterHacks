
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyATNvmI5Q8DYNOi0yjH2v8xaM_mOSyOmQU",
    authDomain: "starterhacks-1cal0.firebaseapp.com",
    databaseURL: "https://starterhacks-1cal0.firebaseio.com",
    projectId: "starterhacks-1cal0",
    storageBucket: "starterhacks-1cal0.appspot.com",
    messagingSenderId: "511696912670"
  };
  
  firebase.initializeApp(config);


  var obj = {
    signUp : function() {
      
      var email = document.getElementById("email").value;
      var password = document.getElementById("pass").value;
      alert(email + " , " + password);
      
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
    },

      signIn : function() {
      
      var email = document.getElementById("email").value;
      var password = document.getElementById("pass").value;
      alert(email + " , " + password);
      
       firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
      }
  };