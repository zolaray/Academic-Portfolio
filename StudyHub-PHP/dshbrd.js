function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  clock.textContent = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  date.textContent = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const hours = now.getHours();
  const greeting = document.getElementById("greeting");
  if (hours < 12) {
    greeting.textContent = "Good Morning, Student.";
  } else if (hours < 18) {
    greeting.textContent = "Good Afternoon, Student.";
  } else {
    greeting.textContent = "Good Evening, Student.";
  }
}
setInterval(updateClock, 1000);
updateClock();

// === Upcoming Tasks & Exams ===
function formatDate(date) {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

// Sample data
const taskData = {
  "2025-05-17": ["Finish project report", "Read Chapter 5"],
  "2025-05-18": ["Math homework"],
};

const examData = {
  "2025-05-17": ["English Quiz"],
  "2025-05-19": ["Science Exam"],
};

let currentTaskDate = new Date();
let currentExamDate = new Date();

function updateCard(date, displayId, listId, data) {
  const iso = date.toISOString().split('T')[0];
  document.getElementById(displayId).textContent = formatDate(date);

  const list = document.getElementById(listId);
  list.innerHTML = '';

  const items = data[iso] || [];
  if (items.length === 0) {
    list.innerHTML = `<li>No items scheduled for this day.</li>`;
  } else {
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  }
}

// Load initial
updateCard(currentTaskDate, "task-date", "task-list", taskData);
updateCard(currentExamDate, "exam-date", "exam-list", examData);

// Navigation
document.getElementById("task-prev").onclick = () => {
  currentTaskDate.setDate(currentTaskDate.getDate() - 1);
  updateCard(currentTaskDate, "task-date", "task-list", taskData);
};
document.getElementById("task-next").onclick = () => {
  currentTaskDate.setDate(currentTaskDate.getDate() + 1);
  updateCard(currentTaskDate, "task-date", "task-list", taskData);
};

document.getElementById("exam-prev").onclick = () => {
  currentExamDate.setDate(currentExamDate.getDate() - 1);
  updateCard(currentExamDate, "exam-date", "exam-list", examData);
};
document.getElementById("exam-next").onclick = () => {
  currentExamDate.setDate(currentExamDate.getDate() + 1);
  updateCard(currentExamDate, "exam-date", "exam-list", examData);
};
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.sidebar-toggle');
  const activitiesLi = toggleBtn.parentElement;

  toggleBtn.addEventListener('click', () => {
    activitiesLi.classList.toggle('open');
  });
});
