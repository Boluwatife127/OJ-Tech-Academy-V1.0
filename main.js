function validateForm() {

  // Stop the form from submitting for now
  let valid = true;
  console.log("Form validation started");

  // Validate name
  let name = document.getElementById('name').value;
  if (name === '') {
    alert('Error! Please input a name.');
    valid = false;
  }

  // Validate email
  let email = document.getElementById('emailReg').value;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    alert('Error! Please input an email.');
    valid = false;
  } else if (!emailPattern.test(email)) {
    alert('Error! Invalid email format.');
    valid = false;
  }

  // Validate password
  let password = document.getElementById('passwordReg').value;
  if (password === '') {
    alert('Error! Password is empty.');
    valid = false;
  } else if (password.length < 8) {
    alert('Error! Password must be at least 8 characters long.');
    valid = false;
  }

  // Confirm password
  let password2 = document.getElementById('passwordCon').value;
  if (password2 !== password) {
    alert('Error! Passwords do not match.');
    valid = false;
  } else if (password2 === '') {
    alert('Error! Password confirmation is empty.');
    valid = false;
  }

  // Validate checkbox
  let checkbox = document.getElementById('termCon').checked;
  if (!checkbox) {
    alert('Please check the box.');
    valid = false;
  }

  // If all validations pass, handle the data submission and redirect
  if (valid) {
    console.log("Validation successful, redirecting to lms.html");
    window.location.href = 'lms.html';  // Redirect to lms.html
    return false;  // Prevent form submission since we're redirecting
  } else {
    return false;  // Prevent form submission if validation fails
  }
 
}


function validateLoginForm() {
  let valid = true;
  console.log("Form validation started");

  // Validate email
  let emailLogin = document.getElementById('emailLogin').value;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailLogin === '') {
    alert('Error! Please input an email.');
    valid = false;
  } else if (!emailPattern.test(emailLogin)) {
    alert('Error! Invalid email format.');
    valid = false;
  }

  // Validate password
  let passwordLogin = document.getElementById('passwordLogin').value;
  if (passwordLogin === '') {
    alert('Error! Password is empty.');
    valid = false;
  } else if (passwordLogin !== '12345678') {
    alert('Error! Password is INCORRECT, please contact Developer.');
    valid = false;
  } else if (passwordLogin.length < 8) {
    alert('Error! Password must be at least 8 characters long.');
    valid = false;
  }

  // If all validations pass, log in
  if (valid) {
    alert("Validation successful, redirecting to lms.html");
    window.location.href = 'lms.html';  // Redirect to lms.html
    return false;  // Prevent form submission since we're redirecting
  } else {
    return false;  // Prevent form submission if validation fails
  }
}




// Function to display the current date
function displayDate() {
  let dateElement = document.querySelector('.date');  // Assuming .date is the class used in your div
  
  // Get today's date
  let today = new Date();
  
  // Get day, month, and year
  let day = String(today.getDate()).padStart(2, '0');
  let month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
  let year = today.getFullYear();
  
  // Format the date as DD/MM/YYYY
  let formattedDate = `${day}/${month}/${year}`;
  
  // Insert formatted date into the div
  if (dateElement) {
    dateElement.textContent = formattedDate;
  }
}

// Call the displayDate function to show the date
displayDate();




// JS for dropdown menu
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');


toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen ? 'open' : '';
};

// JS code to show/hide password and change icon
const pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link"),
  container = document.querySelector(".container");

// Show/hide password functionality
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach(pwField => {
      if (pwField.type === "password") {
        pwField.type = "text";
        pwShowHide.forEach(icon => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";
        pwShowHide.forEach(icon => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// Switch between signup and login forms
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});

// Text animation logic
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("animated-heading");
  const text = heading.textContent;
  const paragraph = document.getElementById("animated-paragraph");
  const pText = paragraph.textContent;
  const imageContainer = document.getElementById('image-container');

  heading.textContent = '';  // Clear initial text in h1
  paragraph.textContent = ''; // Clear initial text in p

  // Animate h1 letters (float in)
  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    heading.appendChild(span);

    setTimeout(() => {
      span.classList.add('show');
    }, index * 400); // Adjust the delay for h1 animation speed
  });

  // After h1 animation, animate the p tag (float in)
  const h1AnimationTime = text.length * 400; // Total time for h1 animation
  setTimeout(() => {
    pText.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      paragraph.appendChild(span);

      setTimeout(() => {
        span.classList.add('show');
      }, index * 500); // Adjust the delay for p animation speed
    });
  }, h1AnimationTime);

  // Animate text out and show the image
  const totalTextAnimationTime = h1AnimationTime + pText.length * 500;

  setTimeout(() => {
    // Hide h1 letters
    heading.querySelectorAll('span').forEach((span, index) => {
      setTimeout(() => {
        span.classList.remove('show');
        span.classList.add('hide');
      }, index * 150); // Delay for hiding
    });

    // Hide p letters
    paragraph.querySelectorAll('span').forEach((span, index) => {
      setTimeout(() => {
        span.classList.remove('show');
        span.classList.add('hide');
      }, index * 150); // Delay for hiding
    });

    // After hiding text, display the image with the same float-in animation
    setTimeout(() => {
      imageContainer.style.display = 'block'; // Show the image container

      setTimeout(() => {
        imageContainer.style.opacity = 1; // Add animation effect for opacity
        imageContainer.style.transform = 'translateY(0)'; // Float in the image
      }, 300); // Slight delay before image floats in
    }, pText.length * 300); // Delay based on how long it takes for the paragraph to fade out
  }, totalTextAnimationTime + 1000); // Start fade-out after a delay
});

// Load the saved profile data on page load
window.onload = function() {
  loadProfile();
};

