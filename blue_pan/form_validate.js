function validateForm() {
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("cellNumber").value.trim();
  const services = document.querySelectorAll("input[name='services']:checked");
  const joinLessons = document.querySelectorAll("input[name='joinLessons']:checked");
  const rating = document.querySelectorAll("input[name='rating']:checked");
  const suggestions = document.getElementById("suggestions").value.trim();

  // Validate name & surname
  const namePattern = /^[A-Za-z\s]+$/;
  if (!name.match(namePattern) || name.split(" ").length < 2) {
    alert("Please enter your full name and surname (letters only).");
    return false;
  }

  // Validate email (must include @ and .)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address (must include @ and .).");
    return false;
  }

  // Validate cellphone number (SA format, 10 digits)
  const phonePattern = /^0\d{9}$/;
  if (!phone.match(phonePattern)) {
    alert("Please enter a valid South African cellphone number (10 digits, starting with 0).");
    return false;
  }

  // Validate at least one service selected
  if (services.length === 0) {
    alert("Please select at least one service you're interested in.");
    return false;
  }

  // Validate join lessons choice
  if (joinLessons.length === 0) {
    alert("Please select if you'd join the baking lessons in September.");
    return false;
  }

  // Validate rating
  if (rating.length === 0) {
    alert("Please rate your experience from 1 to 5.");
    return false;
  }

  // Validate suggestions
  if (suggestions === "") {
    alert("Please share your suggestions or ideas.");
    return false;
  }

  alert("Thank you! Your form has been submitted successfully. 🎉");
  return true;
}
