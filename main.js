// Function to handle logout

document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            localStorage.removeItem("loggedInUser");
            window.location.href = "index.html"; // Redirect to login page
        });
    }
    showSection('personalInfo'); // Default section to show on load
});

// Function to show the selected section in the sidebar
function showSection(sectionId) {
    // Hide all form sections
    document.querySelectorAll('.form-section').forEach(section => {
        section.style.display = 'none';
    });
    // Display the selected form section
    document.getElementById(sectionId).style.display = 'block';
}

// Function to add personal info to the resume template
function addPersonalInfo() {
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const nationality = document.getElementById('nationality').value;
    const religion = document.getElementById('religion').value;
    const maritalStatus = document.getElementById('maritalStatus').value;
    const photo = document.getElementById('photo').files[0]; // Get the photo file
    const resumeContent = document.getElementById('resumeContent');

    // Check if personal details section already exists
    let personalInfoSection = document.getElementById('personalInfoSectionContent');
    if (!personalInfoSection) {
        // Create the personal details section if it doesn't exist
        personalInfoSection = document.createElement('div');
        personalInfoSection.id = 'personalInfoSectionContent';
        personalInfoSection.innerHTML = `<h3>Personal Info</h3>`;
        resumeContent.appendChild(personalInfoSection);
    }

    // Add or update personal details
    personalInfoSection.innerHTML += `<p><strong>Name:</strong> ${fullName}</p>
                                      <p><strong>Address:</strong> ${address}</p>
                                      <p><strong>Phone:</strong> ${phone}</p>
                                      <p><strong>Email:</strong> ${email}</p>
                                      <p><strong>Nationality:</strong> ${nationality}</p>
                                      <p><strong>Religion:</strong> ${religion}</p>
                                      <p><strong>Marital Status:</strong> ${maritalStatus}</p>`;
    
    // Display photo if uploaded
    const profilePhotoContainer = document.getElementById('profilePhotoContainer');
    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePhotoContainer.innerHTML = `<img src="${e.target.result}" alt="Profile Photo">`;
            profilePhotoContainer.querySelector('img').style.display = "block"; // Show photo when uploaded
        };
        reader.readAsDataURL(photo);
    } else {
        profilePhotoContainer.innerHTML = ""; // Clear photo container if no photo
    }

    // Clear input fields after adding details
    document.getElementById('fullName').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('nationality').value = '';
    document.getElementById('religion').value = '';
    document.getElementById('maritalStatus').value = '';
    document.getElementById('photo').value = '';
}

// Function to add educational info to the resume template
function addEducationInfo() {
    const institution = document.getElementById('institution').value;
    const degree = document.getElementById('degree').value;
    const graduationYear = document.getElementById('graduationYear').value;
    const resumeContent = document.getElementById('resumeContent');

    // Check if education section already exists
    let educationSection = document.getElementById('educationSectionContent');
    if (!educationSection) {
        // Create the education section if it doesn't exist
        educationSection = document.createElement('div');
        educationSection.id = 'educationSectionContent';
        educationSection.innerHTML = `<h3>Educational Info</h3>`;
        resumeContent.appendChild(educationSection);
    }

    // Add educational info
    educationSection.innerHTML += `<p><strong>Institution:</strong> ${institution}</p>
                                   <p><strong>Degree:</strong> ${degree}</p>
                                   <p><strong>Year of Graduation:</strong> ${graduationYear}</p>`;

    // Clear input fields after adding educational info
    document.getElementById('institution').value = '';
    document.getElementById('degree').value = '';
    document.getElementById('graduationYear').value = '';
}

// Function to add experience to the resume template
function addExperience() {
    const company = document.getElementById('company').value;
    const role = document.getElementById('role').value;
    const years = document.getElementById('years').value;
    const resumeContent = document.getElementById('resumeContent');

    // Check if experience section already exists
    let experienceSection = document.getElementById('experienceSectionContent');
    if (!experienceSection) {
        // Create the experience section if it doesn't exist
        experienceSection = document.createElement('div');
        experienceSection.id = 'experienceSectionContent';
        experienceSection.innerHTML = `<h3>Experience</h3>`;
        resumeContent.appendChild(experienceSection);
    }

    // Add experience
    experienceSection.innerHTML += `<p><strong>Company:</strong> ${company}</p>
                                    <p><strong>Role:</strong> ${role}</p>
                                    <p><strong>Years:</strong> ${years}</p>`;

    // Clear input fields after adding experience
    document.getElementById('company').value = '';
    document.getElementById('role').value = '';
    document.getElementById('years').value = '';
}

// Function to add a skill to the resume template
function addSkill() {
    const skill = document.getElementById('skill').value;
    const resumeContent = document.getElementById('resumeContent');

    // Check if skills section already exists
    let skillsSection = document.getElementById('skillsSectionContent');
    if (!skillsSection) {
        // Create the skills section if it doesn't exist
        skillsSection = document.createElement('div');
        skillsSection.id = 'skillsSectionContent';
        skillsSection.innerHTML = `<h3>Skills</h3>`;
        resumeContent.appendChild(skillsSection);
    }

    // Add skill to the skills section
    skillsSection.innerHTML += `<p>${skill}</p>`;

    // Clear input field after adding skill
    document.getElementById('skill').value = '';
}

// Function to add a hobby to the resume template
function addHobby() {
    const hobby = document.getElementById('hobby').value;
    const resumeContent = document.getElementById('resumeContent');

    // Check if hobbies section already exists
    let hobbiesSection = document.getElementById('hobbiesSectionContent');
    if (!hobbiesSection) {
        // Create the hobbies section if it doesn't exist
        hobbiesSection = document.createElement('div');
        hobbiesSection.id = 'hobbiesSectionContent';
        hobbiesSection.innerHTML = `<h3>Hobbies</h3>`;
        resumeContent.appendChild(hobbiesSection);
    }

    // Add hobby to the hobbies section
    hobbiesSection.innerHTML += `<p>${hobby}</p>`;

    // Clear input field after adding hobby
    document.getElementById('hobby').value = '';
}

// Function to add a custom section to the resume template
function addCustomSection() {
    const customHeading = document.getElementById('customHeading').value;
    const customSubheading = document.getElementById('customSubheading').value;
    const customDetails = document.getElementById('customDetails').value;
    const resumeContent = document.getElementById('resumeContent');

    // Check if custom section already exists
    let customSection = document.getElementById('customSectionContent');
    if (!customSection) {
        // Create the custom section if it doesn't exist
        customSection = document.createElement('div');
        customSection.id = 'customSectionContent';
        customSection.innerHTML = `<h3>Custom Section</h3>`;
        resumeContent.appendChild(customSection);
    }

    // Add custom section content
    customSection.innerHTML += `<p><strong>${customHeading}:</strong> ${customSubheading}</p>
                                <p>${customDetails}</p>`;

    // Clear input fields after adding custom section content
    document.getElementById('customHeading').value = '';
    document.getElementById('customSubheading').value = '';
    document.getElementById('customDetails').value = '';
}

// Function to download the resume as PDF


// Ensure this code runs after the document is fully loaded

    function captureAndDownloadAsPDF() {
        const container = document.getElementById('resumeContent'); // The container you want to capture

        // Temporarily set the height of the container to auto to capture all content
        const originalHeight = container.style.height;
        container.style.height = 'auto'; // Make it auto to expand fully

        // Use html2canvas to capture the full content as an image
        html2canvas(container, {
            scale: 2,  // Increase the scale for better resolution
            useCORS: true,  // Enable CORS for external resources like images
            scrollX: 0,  // Prevent horizontal scrolling affecting the capture
            scrollY: 0,  // Prevent vertical scrolling affecting the capture
            windowWidth: document.body.scrollWidth,  // Capture the full width
            windowHeight: document.body.scrollHeight  // Capture the full height
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');  // Get image data

            // Create a new PDF document
            const { jsPDF } = window.jspdf; // Access jsPDF from the global window object
            const pdf = new jsPDF('p', 'mm', 'a4');  // 'p' for portrait, 'mm' for millimeters, 'a4' for paper size

            // Define image dimensions
            const imgWidth = 190;  // A4 width minus margins
            const imgHeight = canvas.height * imgWidth / canvas.width;  // Adjust the image height
            let heightLeft = imgHeight;
            let position = 0;

            // Add the image to the first page
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pdf.internal.pageSize.height;

            // Add new pages if content overflows
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pdf.internal.pageSize.height;
            }

            // Save the PDF
            pdf.save('resume.pdf');

            // Restore the original container height
            container.style.height = originalHeight;
        }).catch(error => {
            console.error('Error capturing content:', error);
        });
    }

    // Attach function to button click
    document.querySelector('button').addEventListener('click', captureAndDownloadAsPDF);










