//---------Logout Functionality--------

document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            console.log("logout clicked");
            
            localStorage.removeItem("loggedInUser");
            window.location.href = "index.html"; // Redirect to login page
        });
    }
});

//-----------Welcome message----------

// Retrieve the currently logged-in user's username
const username = localStorage.getItem('currentUsername'); 

// Check if the username exists in local storage
if (username) {
  // Retrieve the user details using the username key
  const userDetails = JSON.parse(localStorage.getItem(username));

  // Check if userDetails is valid and contains fullName
  if (userDetails && userDetails.fullName) {
    const fullName = userDetails.fullName;
    
    // Update the welcome message
    document.getElementById('welcomeHeading').textContent = `Welcome, ${fullName} ! Let's Build Your Perfect Resume.`;
  } else {
    document.getElementById('welcomeHeading').textContent = 'Welcome, Guest';
  }
} else {
  document.getElementById('welcomeHeading').textContent = 'Welcome, Guest';
}

// Craft CV buttons-------

document.getElementById('craftCV').onclick = function() {
  // Redirect to another page
  document.body.classList.add("fade-in");

  // Event listener for redirect button
  document.getElementById("craftCV").addEventListener("click", function () {
    // Trigger fade-out effect
    console.log("Animation trigrred");
    
    document.body.classList.remove("fade-in");
    document.body.classList.add("fade");

    // After the fade-out effect finishes, redirect
    setTimeout(function () {
      window.location.href = "main.html"; // Replace with your actual URL
    }, 500); // 0.5 seconds (500ms) delay matches the CSS transition time
  });
};

// User rating slider--------
document.addEventListener('DOMContentLoaded', () => {
  const profileCards = document.querySelectorAll('.profile-card');

  profileCards.forEach(card => {
    const photo = card.querySelector('.profile-photo');
    const commentCard = card.querySelector('.comment-card');

    card.addEventListener('mouseover', () => {
      photo.style.transform = 'scale(1.1)';
      commentCard.style.opacity = '1';
    });

    card.addEventListener('mouseout', () => {
      photo.style.transform = 'scale(1)';
      commentCard.style.opacity = '0';
    });
  });
});

// Page redirect animantions
document.addEventListener("DOMContentLoaded", function () {
  // Fade in effect when the page loads
  document.body.classList.add("fade-in");

  // Event listener for redirect button
  document.getElementById("craftCV").addEventListener("click", function () {
    // Trigger fade-out effect
    console.log("Animation trigrred");
    
    document.body.classList.remove("fade-in");
    document.body.classList.add("fade");

    // After the fade-out effect finishes, redirect
    setTimeout(function () {
      window.location.href = "main.html"; // Replace with your actual URL
    }, 2000); // 0.5 seconds (500ms) delay matches the CSS transition time
  });
});
