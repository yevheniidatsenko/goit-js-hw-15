document
  .getElementById("validation-input")
  .addEventListener("blur", function () {
    const input = this;
    const length = input.getAttribute("data-length");
    const value = input.value;

    if (value.length === Number(length)) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  });
