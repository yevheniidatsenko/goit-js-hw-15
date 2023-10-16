document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = this.elements.email.value;
    const password = this.elements.password.value;

    if (!email || !password) {
      alert("All fields must be filled");
      return;
    }

    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);

    this.reset();
  });
