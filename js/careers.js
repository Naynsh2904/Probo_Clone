function filterJobs() {
  // Get the selected team from the dropdown
  const selectedTeam = document.querySelector("select").value;

  // Get all the job listings
  const jobListings = document.querySelectorAll(".job-listing");

  // Loop through each job listing and toggle visibility
  jobListings.forEach((job) => {
    const jobTeam = job.getAttribute("data-team");
    if (selectedTeam === "All Teams" || jobTeam === selectedTeam) {
      job.style.display = "flex"; // Show matching jobs
    } else {
      job.style.display = "none"; // Hide non-matching jobs
    }
  });
}
