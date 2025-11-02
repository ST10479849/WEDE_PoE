// formValidation.js
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = form.querySelectorAll("input[required], textarea[required]");
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          alert(`Please fill in the ${input.name || 'required'} field.`);
          valid = false;
        }
      });

      if (valid) {
        alert("Form submitted successfully! Thank you 😊");
        form.reset();
      }
    });
  });
});
