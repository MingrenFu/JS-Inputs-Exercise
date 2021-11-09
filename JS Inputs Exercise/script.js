const app = {

  initialize: function () {
    document.getElementById('submit_btn').addEventListener('click', () => {
      this.checkContent();
    });
  },

  checkContent: function() {
    let firstname = document.getElementById("firstName").value;
    let lastname = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let checked = document.getElementById("subscribe").checked;
    if (firstname !== '' && lastname !== '' && email !== '' && validateEmail(email) == true && checked === true) {
      document.getElementById("submit_btn").style.display = "none";
      const element1 = document.getElementById("loading_animation");
      element1.classList.add("loader");
      setTimeout(function(){ document.getElementById("post_submit").classList.add("submit_message"); element1.classList.remove("loader"); }, 3000);
      let firstNameBox = document.getElementById("firstName");
      let lastNameBox = document.getElementById("lastName");
      let emailBox = document.getElementById("email");
      let emailLabel = document.getElementById("emailNote");
      let checkLabel = document.getElementById("checkBoxNote");
      firstNameBox.classList.remove("redFormInput");
      lastNameBox.classList.remove("redFormInput");
      emailBox.classList.remove("redFormInput");
      emailLabel.classList.remove("emailErrorLabel");
      checkLabel.classList.remove("checkBoxLabel");
      console.log ("Valid Content");
      setTimeout(function(){ window.location.replace("index.html"); }, 10000);
    }
    else {
      const element1 = document.getElementById("loading_animation");
      element1.classList.remove("loader");
      if (firstname == '') {
        let firstNameBox = document.getElementById("firstName");
        firstNameBox.classList.add("redFormInput");
      }
      if (firstname !== '') {
        let firstNameBox = document.getElementById("firstName");
        firstNameBox.classList.remove("redFormInput");
      }
      if (lastname == '') {
        let lastNameBox = document.getElementById("lastName");
        lastNameBox.classList.add("redFormInput");
      }
      if (lastname !== '') {
        let lastNameBox = document.getElementById("lastName");
        lastNameBox.classList.remove("redFormInput");
      }
      if (email == '') {
        let emailBox = document.getElementById("email");
        emailBox.classList.add("redFormInput");
      }
      if (email !== '') {
        if (validateEmail(email) == false) {
          let emailLabel = document.getElementById("emailNote");
          emailLabel.classList.add("emailErrorLabel");
          let emailBox = document.getElementById("email");
          emailBox.classList.add("redFormInput");
        } else {
          let emailBox = document.getElementById("email");
          emailBox.classList.remove("redFormInput");
          emailLabel.classList.remove("emailErrorLabel");
        }
      }
      if (checked === false) {
        let checkLabel = document.getElementById("checkBoxNote");
        checkLabel.classList.add("checkBoxLabel");
      }
      if (checked === true) {
        let checkLabel = document.getElementById("checkBoxNote");
        checkLabel.classList.remove("checkBoxLabel");
      }
    }
  }

}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
