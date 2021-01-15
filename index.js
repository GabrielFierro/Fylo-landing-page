  function email_verification() {

    var state = document.getElementById("email").value;

    var condition = state.search("@");

    if(condition < 0){
      document.getElementById("email-alert").innerHTML = "Please enter a valid email address";
    }
  }