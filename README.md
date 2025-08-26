📚 Library Management System

A Full Stack Web Application built with React (frontend) and Spring Boot (backend), integrated with MySQL database, providing a seamless experience for managing books, borrowing, reviews, and admin services.

✨ Features
🔑 Authentication & Security

User Sign-up, Login, and Logout

Social Login with Google OAuth

Security applied using JWT, OAuth2, OIDC, and HTTPS/SSL/TLS

📖 User Functionalities

Search & Browse: Search books with category filters and pagination

Book Details: View availability, checkout copies if logged in

Ratings & Reviews: Add star-based ratings and reviews (requires login)

Shelf: View currently borrowed books

History: Track borrowing history with issue and return dates

Library Services: Q/A feature to interact with admin

👨‍💼 Admin Functionalities

Add or delete books

Answer user queries (Q/A)

🛠️ Tech Stack

Frontend: React, Javascript , TypeScript (npm, VS Code)

Backend: Spring Boot, REST APIs, Maven (IntelliJ IDEA)

Database: MySQL

Authentication & Security: JWT, OAuth2, OIDC, Google OAuth, HTTPS/SSL/TLS

📂 Project Structure
eLibrary-Management-System/
├── backend/            # Spring Boot application
│   ├── src/main/java   # Controllers, Services, Repositories, Entities
│   ├── src/main/resources
│   └── pom.xml
├── frontend/           # React application
│   ├── src/            # Components, Pages, Hooks
│   └── package.json
└── README.md


🚀 Future Enhancements

Payment Integration

Integrate Stripe API for handling online payments (e.g., fines for late returns, premium membership, or book purchases).

Automated Testing

Add JUnit & Mockito test cases for backend services.

Add Postman/Newman API tests for validating REST endpoints.

Add React Testing Library / Jest for frontend component testing.

Email Notifications

Notify users about upcoming due dates, overdue books, and admin responses.
