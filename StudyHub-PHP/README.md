# 📚 StudyHub: Full-Stack Productivity Platform

### 🎯 Project Goal
[cite_start]StudyHub is a web-based platform designed to support academic success by offering tools for **Time Mastery** and **Study Tracking**[cite: 10, 11]. [cite_start]It aims to make studying more structured and accessible[cite: 13].

### ⚙️ Technologies Used
* [cite_start]**Back-End:** PHP (Server-side scripting) [cite: 30][cite_start], MySQL (Study session and user record storage)[cite: 32].
* [cite_start]**Front-End:** HTML5, CSS3, JavaScript[cite: 22, 24].
* [cite_start]**Tools:** XAMPP/WAMP for local server environment[cite: 28].

### ⭐ Technical Highlights (What I Learned)
This project required implementing solutions for core web security and data integrity:
1.  [cite_start]**Password Security:** Addressed security risk of plain-text storage by implementing `password_hash()` and `password_verify()` in PHP for secure storage[cite: 47, 49, 50].
2.  [cite_start]**Data Integrity:** Ensured study sessions are correctly related to the user by establishing a **Foreign Key constraint** between the `study_sessions` and `users` tables[cite: 51, 52].
3.  [cite_start]**Responsive Design:** Utilized media queries and flexible CSS units (%, vh, vw) to ensure the interface adapted across different devices[cite: 54, 55].

### 🚀 Setup
1.  **Database:** Import the provided `database_schema.sql` file into a local MySQL instance.
2.  **Configuration:** Update the database connection credentials in your PHP scripts.