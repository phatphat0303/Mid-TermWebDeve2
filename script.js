// Phat Tang

// Create an Array of Job Listings
const jobListings = [
    {
      title: 'Software Engineer',
      type: 'Full-time',
      location: 'San Francisco, CA',
      postedDate: '2024-01-15'
    },
    {
      title: 'Marketing Specialist',
      type: 'Part-time',
      location: 'New York, NY',
      postedDate: '2024-01-20'
    },
    {
      title: 'Data Analyst',
      type: 'Contract',
      location: 'Seattle, WA',
      postedDate: '2024-01-25'
    },
    {
      title: 'UX/UI Designer',
      type: 'Full-time',
      location: 'Austin, TX',
      postedDate: '2024-01-10'
    },
    {
      title: 'Financial Analyst',
      type: 'Full-time',
      location: 'Chicago, IL',
      postedDate: '2024-01-18'
    },
    {
      title: 'Customer Support Representative',
      type: 'Part-time',
      location: 'Los Angeles, CA',
      postedDate: '2024-01-28'
    },
    {
      title: 'Project Manager',
      type: 'Contract',
      location: 'Boston, MA',
      postedDate: '2024-01-22'
    },
    {
      title: 'Human Resources Specialist',
      type: 'Full-time',
      location: 'Denver, CO',
      postedDate: '2024-01-12'
    },
    {
      title: 'Sales Associate',
      type: 'Part-time',
      location: 'Miami, FL',
      postedDate: '2024-01-30'
    },
    {
      title: 'IT Support Technician',
      type: 'Full-time',
      location: 'Dallas, TX',
      postedDate: '2024-01-17'
    }
  ];
  
  // Step 3: Populate the Job Listings
  document.addEventListener('DOMContentLoaded', function () {
    const jobListingsContainer = document.getElementById('job-container');

    function populateJobListings(jobListings) {
        jobListings.forEach(job => {
            const jobListingElement = document.createElement('div');
            jobListingElement.innerHTML = `
                <h3>${job.title}</h3>
                <p>Type: ${job.type}</p>
                <p>Location: ${job.location}</p>
                <p>Posted Date: ${job.postedDate}</p>
                <hr>
            `;
            jobListingsContainer.appendChild(jobListingElement);
        });
    }

    populateJobListings(jobListings);
});
function validateSubscriptionForm() {
  const emailInput = document.getElementById('email');
  const checkbox = document.getElementById('checkbox');

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      return false;
  }

  // Validate checkbox
  if (!checkbox.checked) {
      alert('Please agree to the terms and conditions.');
      return false;
  }

  return true;
}

// Function to Clear Subscription Form Fields
function clearForm() {
  document.getElementById('subscription-form').reset();
}

// Function to Handle Subscription
function handleSubscription(event) {
  event.preventDefault(); // Prevent form submission for now

  if (validateSubscriptionForm()) {
      // Simulate form submission (replace with actual submission logic)
      const email = document.getElementById('email').value;
      alert(`Subscription Successful!\nEmail: ${email}`);
      clearForm();
  }
}

// Function for Job Search Filtering
document.getElementById('search-bar').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const jobListings = document.querySelectorAll('#job-container div');

  jobListings.forEach(listing => {
      const title = listing.querySelector('h3').textContent.toLowerCase();

      if (title.includes(searchTerm)) {
          listing.style.display = 'block';
      } else {
          listing.style.display = 'none';
      }
  });
});
  
  