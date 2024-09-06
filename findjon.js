
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


document.getElementById("search-btn").addEventListener("click", function() {
    const keyword = document.getElementById("search-keyword").value;
  
    // Adzuna API request URL
    const apiUrl = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=b07e9ec0&app_key=f950aef8dae380054a40b4e6e69eec7c&results_per_page=10&what=${keyword}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayJobs(data.results);
      })
      .catch(error => console.error('Error fetching jobs:', error));
  });

  
  function displayJobs(jobs) {
    const jobsContainer = document.getElementById("jobs-container");
    jobsContainer.innerHTML = ""; // Clear previous results
  
    if (jobs.length === 0) {
      jobsContainer.innerHTML = "<p>No jobs found for this keyword.</p>";
    } else {
      jobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
  
        jobCard.innerHTML = `
          <h3 class="job-title">${job.title}</h3>
          <p class="job-details">Location: ${job.location.display_name}</p>
          <p class="job-details">Company: ${job.company.display_name}</p>
          <p class="job-details">Salary: ${job.salary_min ? "Rs." + job.salary_min + " - Rs." + job.salary_max : "Not specified"}</p>
          <button class="search-job"><a  href="${job.redirect_url}" target="_blank"></a>View Job</button>
          
        `;
  
        jobsContainer.appendChild(jobCard);
      });
    }
  }

