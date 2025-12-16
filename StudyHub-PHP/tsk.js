// === إضافة مادة جديدة ===
const addBtn = document.getElementById("add-new-btn");
const form = document.getElementById("new-subject-form");
const input = document.getElementById("new-subject-input");
const list = document.getElementById("subject-list");

addBtn.addEventListener("click", () => {
  form.style.display = form.style.display === "none" ? "block" : "none";
});

function addSubject() {
  const newSubject = input.value.trim();
  if (newSubject !== "") {
    const btn = document.createElement("button");
    btn.textContent = newSubject;
    list.insertBefore(btn, addBtn);
    input.value = "";
    form.style.display = "none";
  }
}

// === التقويم وتحديد التاريخ ===
const dateInput = document.getElementById("custom-date");
const calendar = document.getElementById("calendar");
let currentDate = new Date();

dateInput.addEventListener("click", () => {
  calendar.classList.toggle("hidden");
  generateCalendar(currentDate);
});

function generateCalendar(date) {
  calendar.innerHTML = "";

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  // التنقل بين الشهور
  const nav = document.createElement("div");
  nav.style.display = "flex";
  nav.style.justifyContent = "space-between";
  nav.style.alignItems = "center";
  nav.style.marginBottom = "10px";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "‹";
  prevBtn.onclick = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
  };

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "›";
  nextBtn.onclick = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
  };

  const title = document.createElement("span");
  title.textContent = `${date.toLocaleString('default', { month: 'long' })} ${currentYear}`;
  title.style.fontWeight = "bold";

  nav.appendChild(prevBtn);
  nav.appendChild(title);
  nav.appendChild(nextBtn);
  calendar.appendChild(nav);

  // إنشاء جدول الأيام
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(day => {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  let row = document.createElement("tr");
  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("td");
    cell.textContent = day;
    cell.addEventListener("click", () => {
      const formatted = `${currentYear}-${(currentMonth+1).toString().padStart(2,'0')}-${day.toString().padStart(2,'0')}`;
      dateInput.value = formatted;
      calendar.classList.add("hidden");
    });
    row.appendChild(cell);

    if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
      table.appendChild(row);
      row = document.createElement("tr");
    }
  }

  calendar.appendChild(table);
}
