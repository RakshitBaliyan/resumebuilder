document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    const showSignupForm = document.getElementById("showSignupForm");
    const showLoginForm = document.getElementById("showLoginForm");
    
    // Check for logged-in status
    if (localStorage.getItem("loggedInUser")) {
      if (!document.getElementById("logoutButton")) {
        // Not on main page, so redirect to main.html
        window.location.href = "main.html";
      }
    }
  
    // Toggle between signup and login forms
    if (showSignupForm) {
      showSignupForm.addEventListener("click", function(event) {
        event.preventDefault();
        signupForm.style.display = "block";
        loginForm.style.display = "none";
      });
    }
  
    if (showLoginForm) {
      showLoginForm.addEventListener("click", function(event) {
        event.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
      });
    }
  
    // Handle signup form submission
    if (signupForm) {
      signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const fullName = document.getElementById('fullNameSignup').value;
        const username = document.getElementById("signupUsername").value;
        const password = document.getElementById("signupPassword").value;
  
        if (localStorage.getItem(username)) {
          alert("Username already exists. Please choose a different one.");
        } else {
          // Store the user details (full name, username, and password) in local storage
          const userDetails = {
            fullName: fullName,
            password: password
          };
          localStorage.setItem(username, JSON.stringify(userDetails));
          localStorage.setItem('currentUsername', username);
          alert("Signup successful! You can now log in.");
          signupForm.reset();
          signupForm.style.display = "none";
          loginForm.style.display = "block";
        }
      });
    }
  
    // Handle login form submission
    if (loginForm) {
      loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;
  
        const storedUser = JSON.parse(localStorage.getItem(username));
        if (storedUser && storedUser.password === password) {
          alert("Login successful!");
          localStorage.setItem("loggedInUser", username); // Store logged-in user
          loginForm.reset();
          window.location.href = "home.html"; // Redirect to main page
        } else {
          alert("Invalid username or password.");
        }
      });
    }
  });
  
  
  