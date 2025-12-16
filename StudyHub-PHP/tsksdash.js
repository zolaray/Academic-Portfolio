// Clock & Date
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  document.getElementById("date").textContent = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

// Tab switching
function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");

  const buttons = document.querySelectorAll(".tab");
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

// Show/hide dropdown
function toggleFilter() {
  const dropdown = document.getElementById("subject-dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown on outside click
window.addEventListener("click", function(e) {
  if (!document.querySelector(".filter-container").contains(e.target)) {
    document.getElementById("subject-dropdown").style.display = "none";
  }
})
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.sidebar-toggle');
  const activitiesLi = toggleBtn.parentElement;

  toggleBtn.addEventListener('click', () => {
    activitiesLi.classList.toggle('open');
  });
});



